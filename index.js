// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of the project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter any installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter any usage information:'
  },
  {
    type: 'input',
    name: 'guidelines',
    message: 'Enter any contribution guidelines:'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter any test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter project license:',
    choices: ['None', 'MIT', 'GPL', 'Apache']
  },
  {
    type: 'input',
    message: 'Enter your Github username:',
    name: 'username'
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email'
  }
]

// TODO: Create a function to write README file
function writeToFile (data) {
  const outputReadme = './output/README.md'
  fs.writeFile(outputReadme, data, err => {
    if (err) console.log(err)
    else {
      console.log('File written successfully\n')
      console.log('The written has the following contents:')
      console.log(fs.readFileSync(outputReadme, 'utf8'))
    }
  })
}

// TODO: Create a function to initialize app
function init () {
  inquirer
    .prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init()
