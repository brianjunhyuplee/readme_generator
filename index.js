const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

// getting user input
function promptUser() {
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
      message: "Please write a short description of you project",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "Stuff", "stuff"]
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
    }
  ])
    // .then(function ({ username }) {
    //   axios
    //     .get("https://api.github.com/users/" + username)
    //     .then(function (res) {
    //       const userHTML = res.data.html_url;
    //       const userPic = res.data.avatar_url;
    //     });
    // });
}
//const questions = [username,email,projectName,projectDescription,lisense,dependencies,runTests,usingRepo,contributingRepo];

// make the readme here
function generateREADME(answers,userHTML,userPic) {
  return `
# ${answers.projectName}
<hr>

[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

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

To install necessary dependencies, run the following command:

\`\`\`
  ${answers.dependencies}
\`\`\`

## Usage

${answers.usingRepo}

## License

This Project is licensed under the ${answers.license} 

## Contributing

${answers.contributingRepo}

## Tests

To run tests, run the following command:

\`\`\`
  ${answers.runTests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at [${answers.email}](${answers.email}). You can find more of my work at [${answers.username}](${userHTML}).
    `;
}


promptUser()
  .then(function (answers) {
    axios
         .get("https://api.github.com/users/" + answers.username)
        .then(function (res) {
          const userHTML = res.data.html_url;
          console.log(userHTML);
          const userPic = res.data.avatar_url;
          const md = generateREADME(answers,userHTML,userPic);
          return writeFileAsync("README.md", md);
        });
        //return true;
  })
  .then(function () {
    console.log("Successfully wrote to README.md");
  })
  .catch(function (err) {
    console.log(err);
  });



// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
