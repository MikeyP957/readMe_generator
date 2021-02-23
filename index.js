// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//function that creates markdown from generateMarkdown file
const createMd = require('./utils/generateMarkdown')

// An array of questions for user input
const questions = () =>  //questions include description, installation instructions, usage information, contributing guidelines, testing guidelines, email, github username, and 3 license choices
    inquirer.prompt([
        {
            type: 'input',
            name:'projectName',
            message: 'What is the name of your project?.'
        },
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
            choices:['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License', "Mozilla Public License 2.0"],
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
    ]);


// A function to write README file
// const writeToFile = (data) => 
    
    

// A function to initialize app
function init() {
    questions().then((data) => {
        try{
            const markDown = createMd(data);
            fs.writeFileSync('README.md', markDown);
            console.log('Success!'); 
        }
        catch (error){
            console.log(error);
        }
    })
}

// Function call to initialize app
init();
