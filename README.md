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

## Demo

## Technologies Used

## Installation, Usage, and Tests

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
- [ ] Sample HTML file generated using the application
- [ ] GitHub repository containing application code
#### Walkthrough Video - 32% <!-- omit in toc -->
- [ ] Demonstrates functionality of the application
- [ ] Shows all four passing tests from the command line
- [ ] Demonstrates how user would invoke the application from the command line
- [ ] Demonstrates how a user would enter responses to all of the prompts in the application
- [ ] Shows a generated HTML file that matches the user input
#### Technical Acceptance Criteria - 40% <!-- omit in toc -->
- [ ] Uses Inquirer package
- [ ] Uses Jest package for suite of unit tests
- [ ] Has classes Employee, Manager, Engineer, and Intern
- [ ] Prompts user for team member information
  - [ ] Employee (parent) : name, id, email, getName(), getId(), getEmail(), getRole()
  - [ ] Manager (child) : officeNumber, getRole()
  - [ ] Engineer (child) : github, getGithub(), getRole()
  - [ ] Intern (child) : school, getSchool(), getRole()
- [ ] Prompts follow logic to ask for Manager info, then loops to ask for Engineer or Interns until user stops
- [ ] Generates a webpage after getting all information
- [ ] On webpage, emails are clickable and populate TO field with clicked email
#### Repository Quality - 13% <!-- omit in toc -->
- [ ] Repository has a unique name
- [ ] Repository follows best practices for file structure and naming conventions
- [ ] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [ ] Repository contains multiple descriptive commit messages
- [ ] Repository contains a high-quality README with description and a link to the walkthrough video