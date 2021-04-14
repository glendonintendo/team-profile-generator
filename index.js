const { writeFile, copyFile } = require("./utils/generate-site.js")
const generatePage = require("./src/page-template.js");
const Team = require("./lib/Team.js");

new Team().initializeTeam()
    .then(data => writeFile(generatePage(data)))
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => console.log(copyFileResponse))
    .catch(err => console.log(err));