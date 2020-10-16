var inquirer = require('inquirer');

var fs = require('fs');

const generateMarkdown= require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter your project description",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter your installation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Please enter your usage information",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter your contribution guidelines",
        name: "contribution"
    },
    {
        type: "input",
        message: "Please enter your test instructions",
        name: "test"
    },
    {
        type: "list",
        message: "choose a license",
        name: "license",
        choices: ["MIT","Apache License 2.0","Mozilla Public License 2.0"]
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
   

    

];



// function to write README file
function writeToFile(fileName, data) {
    //usign built in package for fs writefile
    fs.writeFile(fileName, generateMarkdown(data), function(error) {
        if (error) 
        return error
        
    })
}

// function to initialize program
function init() {
    //using .prompt to pass my questions to user
    inquirer.prompt(questions )
    //using .then method to promise users feedback in answers 
    .then(function(answers) {
    let readMeInfo = generateMarkdown(answers);
    //writing the answers into the readme.txt after the user has completed their answers
        writeToFile("Readme.txt", answers);
    })
        

   
}



// function call to initialize program
init();
