// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description:
   ${data.description}

## Table of contents:
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

## Installation
  ${data.install}

## Usage
  ${data.usage}

## Licence
  ${data.licences}

## Contributing
  ${data.contribution}

## Tests
  ${data.test}

## Questions
  If you have any questions feel free to contact me by either:
  * Email Address: [${data.email}](${data.email})
  * Github Profile: [https://github.com/${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
