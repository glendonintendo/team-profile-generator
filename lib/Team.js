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

    getEmployees() {
        return this.employees;
    }

    addEmployee(employeeObj) {
        this.employees.push(employeeObj);
    }
    
    initializeTeam() {
        console.log("Welcome to the team profile generator. Please follow the prompts to create your team webpage.");
        return this.promptEmployee("Manager");
    }

    promptEmployee(role) {
        console.log(`Please enter information for the ${role}.`);

        return inquirer
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
                return this.hasAnotherEmployee();
            })
    }

    hasAnotherEmployee() {
        return inquirer
            .prompt({
                type: "list",
                name: "hasEmployee",
                message: "Would you like to add another employee?",
                choices: ["Intern", "Engineer", "Finish building my team!"]
            })
            .then(data => {
                if (data.hasEmployee === "Finish building my team!") {
                    return this.getEmployees();
                }        
                return this.promptEmployee(data.hasEmployee);
            })
    }
}

module.exports = Team;