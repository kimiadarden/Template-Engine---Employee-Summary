const Manager= require("./lib/Manager");
const Engineer= require("./lib/Engineer");
const Intern= require("./lib/Intern");
const fs= require("fs");
const inquirer= require("inquirer");
const path= require("path");

async function mainStarting(){







    fs.writeFile("templates/finalPage.html", teamHTML, function(err) {

        if (err) {
          return err;
        }
      
        console.log("The final page was made succesfully!");
      
      });  
}


mainStarting()