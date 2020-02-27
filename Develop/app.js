const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

async function mainStarting() {
    let htmlForTeam = "";
    let numberOfteam;

    await inquirer.prompt(
        {
            type: "number",
            message: "How many employee are in your group?",
            name: "teamAmount"
        }
    )
        .then((data) => {

            numberOfteam = data.teamAmount + 1;
        });

    if (numberOfteam === 0) {
        console.log("Your team has no members");
        return;
    }
    for (i = 1; i < numberOfteam; i++) {

        let name;
        let id;
        let title;
        let email;

        await inquirer.prompt([
            {
                type: "input",
                message: `What is the employee (${i})'s id?`,
                name: "id"
            },
            {
                type: "input",
                message: `What is employee (${i})'s name?`,
                name: "name"
            },
            {
                type: "input",
                message: `What is the employee (${i})'s Email?`,
                name: "email"
            },
            {
                type: "list",
                message: `what the employee (${i})'s title?`,
                name: "title",
                choices: [ "Manager","Engineer", "Intern"]
            }
        ]).then((data) => {

            // global variables to use in the html file
            name = data.name;
            id = data.id;
            title = data.title;
            email = data.email;
        });

        //deciding between Engineer, Intern, manager
        switch (title) {
            case "Manager":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your Manager's Office Number?",
                        name: "officeNo"
                    }
                ])
                .then((data) => {
                    const manager = new Manager(name, id, email, data.officeNo);

                    teamMember = fs.readFileSync("templates/manager.html");

                    htmlForTeam = htmlForTeam + "\n" + eval('`'+ teamMember +'`');
                });

                break;

                case "Engineer":
                    await inquirer.prompt([
                        {
                            type: "input",
                            message: "What is your Engineer's GitHub?",
                            name: "github"
                        }
                    ])
                    .then((data) => {
                        const engineer = new Engineer(name, id, email, data.github);
                        teamMember = fs.readFileSync("templates/engineer.html");
                        htmlForTeam = htmlForTeam + "\n" + eval('`'+ teamMember +'`');
                    });
                    break;
                    
                case "Intern":
                    await inquirer.prompt([
                        {
                            type: "input",
                            message: "Which school is the intern studying at?",
                            name: "school"
                        }
                    ])
                    .then((data) => {
                        const intern = new Intern(name, id, email, data.school);
                        teamMember = fs.readFileSync("templates/intern.html");
                        htmlForTeam = htmlForTeam + "\n" + eval('`'+ teamMember +'`');
                    });
                    break;



        }
    }
    const mainHTML = fs.readFileSync("templates/main.html");

    htmlForTeam = eval('`' + mainHTML + '`');

    fs.writeFile("templates/finalPage.html", htmlForTeam, function (err) {

        if (err) {
            return err;
        }

        console.log("The final page was made succesfully!");

    });
}


mainStarting()