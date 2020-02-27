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
    




    fs.writeFile("templates/finalPage.html", teamHTML, function(err) {

        if (err) {
          return err;
        }
      
        console.log("The final page was made succesfully!");
      
      });  
}


mainStarting()