const Employee = require("./Employee");

//building from the Employee
class Engineer extends Employee {
    constructor(name, id, email, github){

        super(name, id, email);

        this.github = github;
        
    }
    githubUserName(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;