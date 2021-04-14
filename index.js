const generateSite = require("./utils/generate-site.js")
const generatePage = require("./src/page-template.js");
const Dummy = require("./src/Dummy.js");
const getQuestions = require("./src/questions.js");
const Team = require("./lib/Team.js");

async function createTeam() {
    const team = new Team();
    let employeeData = await team.initializeTeam();
    console.log(employeeData);
    return employeeData;
}

createTeam()
// call prompt to get user input about employees

// call page template with employees array to generate html

// call generate-site to write a file with html ti dist and to copy css file to dist