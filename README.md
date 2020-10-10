
# README Generator
<hr>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

Quick and easy way to make a README.md by answering a series of questions.

### Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[Process](#process)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```
  npm install inquirer
```

```
  npm install axios
```

## Usage
 
To use the application run an integrated terminal within the index.js file. The user will be prompted with a series of questions.

Based on these questions, a read me will be generated. To access the README, click the README.md file. To observe the final product, right click the file and open preview.

## Process

### Inquirer

Inquirer is used to prompt the user and receieve the user inputs.
*the below code is a sample of how to prompt the user for a username*

```bash
return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    }
```

### Generating the README

A function called generateREADME takes in the answers from inquirer. By encompassing the contents of the function in backticks, the line by line README can be written in markdown formatting. 
To access the user inputs the below code can be implemented.

```bash
${answers.nameOfData}
```

Once the README is documented, it will create the actual file with the contents using the below line.

```bash
return writeFileAsync("README.md", md);
```
## License

This Project is licensed under the MIT License

## Contributing

nothin

## Tests

To run tests, run the following command:

```
  node index.js
```

## Questions

If you have any questions about the repo, open an issue or contact me directly at [brianjunhyuplee@gmail.com](brianjunhyup@gmail.com). You can find more of my work at [brianjunhyuplee](https://github.com/brianjunhyuplee). <img src = "https://avatars3.githubusercontent.com/u/70872311?v=4" width = 20 alt = "github profile picture">
    