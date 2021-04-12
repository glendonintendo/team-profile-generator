const inquirer = require("inquirer");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

const employees = [];

const genericQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is this employee's name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    }
];

const managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is this employee's office number?"
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is this employee's github username?"
    }
];

const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "What is this employee's school?"
    }
];

/**
 * get information about employees
 * 1. ask questions about managers
 * 2. get 
 */

inquirer
    .prompt(genericQuestions)
    .then(data => console.log(data));

module.exports = employees;