// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    // GitHub username
    {
        name: 'username',
        type: 'input',
        message: "What is your GitHub username?",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // User Email
    {
        name: 'contact',
        type: 'input',
        message: "What is your email address?",
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('Please provide your email address!');
                return false;
            }
        }
    },
    // Project title
    {
        name: 'title',
        type: 'input',
        message: "What is the title of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to provide the project title!');
                return false;
            }
        }
    },
    {
    // Project description
        name: 'description',
        type: 'input',
        message: "Please write a short description of your project",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },
    {
        // License used
        name: 'license',
        type: 'list',
        message: "Choose a license for your project",
        choices: ['BSD', 'MIT', 'GNU', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You need to pick the license for your project!');
                return false;
            }
        }
    },
    {
        // Installation details
        name: 'installation',
        type: 'input',
        message: "What command should be run to install dependencies?",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue!');
                return false;
            }
        }
    },
    {
        // Testing instructions
        name: 'tests',
        type: 'input',
        message: "What command should be run to test this project?",
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter how to test this project!');
                return false;
            }
        }
    },
    {
        // Usage instructions
        name: 'usage',
        type: 'input',
        message: "What does the user need to know about using the repo?",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use this project!');
                return false;
            }
        }
    },
    {
        name: 'contribution',
        type: 'input',
        message: "How can people contribute to the repo?",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide details on how others can contribute!');
                return false;
            }
        }
    }
];


// A function that writes a README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully transferred information to README file!')
    });
}

// Afunction to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
}

// Function call to initialize app
init();
