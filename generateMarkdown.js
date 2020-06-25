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

## Usage

## Licence

## Contributing

## Tests

## Questions
`;
}

module.exports = generateMarkdown;
