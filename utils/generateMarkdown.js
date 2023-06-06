// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
  let badge = ''

  if (license != 'None') {
    badge = `![License Badge](https://shields.io/badge/license-${license}-green)`
  }

  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {
  let licenseLink = ''
  switch (license) {
    case 'MIT':
      licenseLink = 'https://mit-license.org/'
      break
    case 'GPL':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
      break
    case 'Apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.html'
      break
  }

  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {
  let licenseSection = ''
  // Create a license section if one is chosen by user
  if (license != 'None') {
    licenseSection += '## License\n'
    licenseSection += `This application uses the ${license} license. Please see
      ${renderLicenseLink(license)} for more information on this license.\n`
  }

  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  let markdown = '' // this is where we will build the markdown for the README

  // 1. Create title
  markdown = `# ${data.title} \n`

  // Place the license badge
  markdown += renderLicenseBadge(data.license) + '\n'

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

  // 6. Create Contributing section
  markdown += '## Contributing \n'
  markdown += `${data.contributing} \n`

  // 7. Add tests section
  markdown += '## Tests \n'
  markdown += `${data.tests} \n`

  // 8. Create license section
  markdown += renderLicenseSection(data.license) + '\n'

  // 9. Create questions/contact me section
  markdown += '## Questions \n'
  markdown += `You can find me [HERE](https://github.com/${data.username}) on Github. \n`
  markdown += `Feel free to email me at ${data.email} if you have any additional questions.`
  return markdown
}

module.exports = generateMarkdown
