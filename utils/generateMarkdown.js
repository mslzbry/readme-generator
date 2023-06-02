// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  let markdown = '' // this is where we will build the markdown for the README

  // 1. Create title
  markdown = `# ${data.title} \n`

  // 2. Create description
  markdown += `## Description \n`
  markdown += `${data.description} \n`

  // 3. Create table of contents
  const contents = [
    'Description',
    'Installation',
    'Usage',
    'Contributing',
    'Tests',
    'License',
    'Questions'
  ]

  markdown += '## Table of Contents \n'

  const generatedToC = contents.map(
    section => `- [${section}](#${section.toLowerCase()}) \n`
  )

  generatedToC.forEach(sectionMarkdown => {
    markdown += sectionMarkdown
  })

  // 4. Create Installation section
  markdown += '## Installation \n '
  markdown += `${data.installation} \n`

  // 5. Create Usage section
  markdown += '## Usage \n'
  markdown += `${data.usage} \n`

  return markdown
}

module.exports = generateMarkdown
