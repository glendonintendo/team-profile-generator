const { writeFile, copyFile } = require("./utils/generate-site.js")
const generatePage = require("./src/page-template.js");
const Team = require("./lib/Team.js");

new Team().initializeTeam()
    .then(data => writeFile(generatePage(data)))
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse.message)
        console.log("Check out your team profile by opening the index.html file in the /dist folder in your browser!")
    })
    .catch(err => console.log(err));