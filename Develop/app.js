const Manager= require("./lib/Manager");
const Engineer= require("./lib/Engineer");
const Intern= require("./lib/Intern");
const fs= require("fs");
const inquirer= require("inquirer");
const path= require("path");

async function mainStarting(){
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
    
    if (numberOfteam === 0){
        console.log("Your team has no members");
        return;
    }
    for(i = 1; i < numberOfteam; i++){

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
                choices: ["Engineer", "Intern", "Manager"]
            }
        ])



    const mainHTML = fs.readFileSync("templates/main.html");
    
    htmlForTeam = eval('`'+ mainHTML +'`');

    fs.writeFile("templates/finalPage.html", teamHTML, function(err) {

        if (err) {
          return err;
        }
      
        console.log("The final page was made succesfully!");
      
      });  
}


mainStarting()