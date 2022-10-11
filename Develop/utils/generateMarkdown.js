// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "None") {
    return ``;
  } else
    return `[![license](https://img.shields.io/badge/license-${license}-blue)](${renderLicenseLink(license)})`
}



// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "BSD") {
    return `https://spdx.org/licenses/BSD-3-Clause.html`;
  } if (license === "MIT") {
    return `https://spdx.org/licenses/MIT.html`;
  } if (license === "GNU") {
    return `https://spdx.org/licenses/GPL-3.0-or-later.html`;
  } if (license === "None") {
    return ``;
  };
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  } else {
    return `## License
  ----
  This project is covered under the ${license} license.
  Click on the license badge to learn more about it.`
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  <br/>
${renderLicenseSection()}


## Description
${data.description}

## Table of Contents
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Quesitons

GitHub: [@${data.username}](https://github.com/${data.username})

Feel free to reach out if you have any enquires
<br/>
Email: ${data.contact}

`;
}

module.exports = generateMarkdown;
