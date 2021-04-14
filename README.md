# Team Profile Generator <!-- omit in toc -->
- [Description](#description)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation, Usage, and Tests](#installation-usage-and-tests)
- [Submission Requirements](#submission-requirements)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Grading Criteria](#grading-criteria)
## Description
The Team Profile Generator is run entirely though the command line. Upon execution of its `index.js` file, the application will prompt the user for employee information and generate a styled webpage using the input information.
## Demo
A video demo of my project can be found [here](https://www.youtube.com/watch?v=vHey3jjI2Gw).
## Technologies Used
- npm inquirer: used to get prompts from the user in the command line
- node fs: used to write the html file and copy the css file to the dist folder
## Installation, Usage, and Tests
This application is run through the command line. To run, make sure you have Node.js installed and then run the command `npm i` to install the necessary dependencies. Then run `node index.js` to start the application.

Using the command line interface, answer the prompts. Once complete, an `index.html` file and a `style.css` will be created in the `./dist/` folder.

If you would like to run the test suite, use the command `npm run test` from the command line to run all tests.
## Submission Requirements
### User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
### Grading Criteria
#### Deliverables - 15% <!-- omit in toc -->
- [x] Sample HTML file generated using the application
- [x] GitHub repository containing application code
#### Walkthrough Video - 32% <!-- omit in toc -->
- [x] Demonstrates functionality of the application
- [x] Shows all four passing tests from the command line
- [x] Demonstrates how user would invoke the application from the command line
- [x] Demonstrates how a user would enter responses to all of the prompts in the application
- [x] Shows a generated HTML file that matches the user input
#### Technical Acceptance Criteria - 40% <!-- omit in toc -->
- [x] Uses Inquirer package
- [x] Uses Jest package for suite of unit tests
- [x] Has classes Employee, Manager, Engineer, and Intern
- [x] Prompts user for team member information
  - [x] Employee (parent) : name, id, email, getName(), getId(), getEmail(), getRole()
  - [x] Manager (child) : officeNumber, getRole()
  - [x] Engineer (child) : github, getGithub(), getRole()
  - [x] Intern (child) : school, getSchool(), getRole()
- [x] Prompts follow logic to ask for Manager info, then loops to ask for Engineer or Interns until user stops
- [x] Generates a webpage after getting all information
- [x] On webpage, emails are clickable and populate TO field with clicked email
#### Repository Quality - 13% <!-- omit in toc -->
- [x] Repository has a unique name
- [x] Repository follows best practices for file structure and naming conventions
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages
- [x] Repository contains a high-quality README with description and a link to the walkthrough video