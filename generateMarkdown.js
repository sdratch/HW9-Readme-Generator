// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description:
   ${data.description}

## Table of contents:
  * [Installation](https://github.com/${data.username}/${data.title}#Intallation)
  * [Usage](https://github.com/${data.username}/${data.title}#Usage)
  * [License](https://github.com/${data.username}/${data.title}#License)
  * [Contributing](https://github.com/${data.username}/${data.title}#Contributing)
  * [Tests](https://github.com/${data.username}/${data.title}#Tests)
  * [Questions](https://github.com/${data.username}/${data.title}#Questions)

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
