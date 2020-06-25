const generatemd = require("./generateMarkdown")

// array of questions for user
const questions = [
  "Enter Project Title: ",
  "Enter Github Username: ",
  "Enter Email Address: ",
  "Enter Project Description: ",
  "Enter Installation Instructions: ",
  "Enter Usage Information: ",
  "Select Licences: ",
  "Enter Contribution: ",
  "Enter Test Instructions: ",
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  const inquirer = require("inquirer");
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "username",
      },
      {
        type: "input",
        message: questions[2],
        name: "email",
      },
      {
        type: "input",
        message: questions[3],
        name: "description",
      },
      {
        type: "input",
        message: questions[4],
        name: "install",
      },
      {
        type: "input",
        message: questions[5],
        name: "usage",
      },
      {
        type: "list",
        message: questions[6],
        name: "licences",
        choices:[
            "mit",
            "gpl-3.0",
            "apache-2.0",
            "isc",
        ]
      },
      {
        type: "input",
        message: questions[7],
        name: "contribution",
      },
      {
        type: "input",
        message: questions[8],
        name: "test",
      },
    ])
    .then(function (response) {
        generatemd(response)

    });
}

// function call to initialize program
init();

//create git hub project
//ask for dependences and have npm i as the option
//## for sections start
// * # for table of contents
//when talking about
//questions at end with name and github link
//usage:use at your own risk
//a lot of defaults for this

//hardcode first
