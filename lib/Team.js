const inquirer = require("inquirer");
const getQuestions = require("../src/questions.js");
const Engineer = require("../lib/Engineer.js");
const Manager = require("../lib/Manager.js");
const Intern = require("../lib/Intern.js");

class Team {
    constructor() {
        this.idTracker = 0;
        this.employees = [];
    }

    getNewId() {
        return this.idTracker++;
    }

    addEmployee(employeeObj) {
        this.employees.push(employeeObj);
    }
    
    initializeTeam() {
        console.log("Welcome to the team profile generator. Please follow the prompts to create your team webpage.")
        this.promptEmployee("Manager");
    }

    promptEmployee(role) {
        console.log(`Please enter information for the ${role}.`);

        inquirer
            .prompt(getQuestions(role))
            .then(data => {
                let newEmployee;
                switch (role) {
                    case "Manager":
                        newEmployee = new Manager(data.name, this.getNewId(), data.email, data.officeNumber);
                        break;
                    case "Engineer":
                        newEmployee = new Engineer(data.name, this.getNewId(), data.email, data.github);
                        break;
                    case "Intern":
                        newEmployee = new Intern(data.name, this.getNewId(), data.email, data.school);
                        break;
                }
                
                this.addEmployee(newEmployee);
                this.hasAnotherEmployee();
            })
    }

    hasAnotherEmployee() {
        inquirer
            .prompt({
                type: "list",
                name: "hasEmployee",
                message: "Would you like to add another employee?",
                choices: ["Intern", "Engineer", "None"]
            })
            .then(data => {
                if (data.hasEmployee === "None") {
                    return this.employees;
                }        
                return this.promptEmployee(data.hasEmployee);
            })
    }
}

module.exports = Team;