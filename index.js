// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ //questions include description, installation instructions, usage information, contributing guidelines, testing guidelines, email, github username, and 3 license choices
    inquirer.prompt([
        {
            type: 'input',
            name:'description',
            message: 'Describe your project.'
        },
        {
            type: 'input',
            name:'installation',
            message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name:'usage',
            message: 'Describe the usage information of your project.'
        },
        {
            type: 'input',
            name:'contributing',
            message: 'What are the contribution guidelines?'
        },
        {
            type: 'input',
            name:'test',
            message: 'What are the testing instructions?'
        },
        {
            type: 'checkbox',
            name:'license',
            message: 'Choose a license for this application.',
            choices:['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },
        {
            type:'input',
            name: 'email',
            message: 'What is your contact email?'
        }
    ])
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(
        `#${fileName}\n 
        ## Description\n ${data.description}\n
        ## Table of contents: \n
        1. [Installation](#Installation)\n
        1. [Usage](#Usage-Instructions)\n
        1. [License](#License)\n
        1. [Contributing](#Contributing-Guidelines)\n
        1. [Testing](#Testing)\n
        1. [Questions](#Questions)\n
        ## Installation:\n
        ${data.installation}\n
        ## Usage Instructions:\n
        ${data.usage}\n
        ## Contributing Guidelines:\n
        ${data.contributing}\n
        ## Testing:\n
        ${data.test}\n
        ## Questions:\n
        Contact me with any further questions via email:${data.email}\nOr my github: ${data.github}\n` 
    );
    console.log('\n-------------\n')
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
