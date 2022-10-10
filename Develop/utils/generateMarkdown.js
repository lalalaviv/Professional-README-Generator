// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (${data.license} === "MIT")

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  


  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License
----
${data.license}

## Description
----
${data.description}

## Table of Contents
----
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation
----
${data.installation}

## Usage
----
${data.usage}


## How to Contribute
----
${data.contribution}

## Tests
----
${data.tests}

## Quesitons
----

GitHub: [@${data.username}](https://github.com/${data.username})

Email: ${data.contact}

`;
}

module.exports = generateMarkdown;
