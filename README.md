# 09 Node.js Challenge: Professional README Generator

## Description
------------
This is a node.js application that uses the command-line to dynamically generate a professional README.md file from a user's input. 
It will include what the app is for, how to use the app, how to install it, how to report issues and how to make contributions. 

## Installation
---
```bash
npm init 
```
 [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)

## Usage
---
The application will be invoked by using the following command:

```bash
node index.js
```

The movie file showing the full functionaility of the application can be found here. 



## User Story
---
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria
---
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Contribution
---
Vivian Lee



