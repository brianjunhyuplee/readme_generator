const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// getting user input
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?"
          },
          {
            type: "input",
            name: "projectName",
            message: "What is your project's name?"
          },
          {
            type: "input",
            name: "projectDescription",
            message: "Please write a short description of you project"
          },
          {
            type: "input",
            name: "license",
            message: "What kind of license should your project have?"
          },
          {
            type: "input",
            name: "dependencies",
            message: "What command should be run to install dependencies?"
          },
          {
            type: "input",
            name: "runTests",
            message: "What command should be run to run tests?"
          },
          {
            type: "input",
            name: "usingRepo",
            message: "What does the user need to know about using the repo"
          },
          {
            type: "input",
            name: "contributingRepo",
            message: "What does the user need to know about contributing to the repo?"
          },
    ]);
}
//const questions = [username,email,projectName,projectDescription,lisense,dependencies,runTests,usingRepo,contributingRepo];

// make the readme here
function generateREADME(answers) {
    return `
#${answers.projectName}
![Github license]("license image badge thing")

## Description
${answers.projectDescription}

### Table of Contents

*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributing](#contributing)
*[Tests](#tests)
*[Questions](#questions)

## Installation

To install necessary dependencies, run the following commamd:
```
`${answers.dependencies}`
```

    `;
}

promptUser()
  .then(function(answers) {
    const md = generateREADME(answers);

    return writeFileAsync("README.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });



// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
