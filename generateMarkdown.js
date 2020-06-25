const moment = require("moment");
const fr = require("fs");

let fullLicense;
// function to generate markdown for README
function generateMarkdown(data) {
  const fullLicense = addLicense(data.licences,data.title,data.username);
  console.log(fullLicense)
  return `# ${data.title}

## Description:
   ${data.description}

## Table of contents:
  * [Installation](https://github.com/${data.username}/${data.title}#Installation)
  * [Usage](https://github.com/${data.username}/${data.title}#Usage)
  * [License](https://github.com/${data.username}/${data.title}#license)
  * [Contributing](https://github.com/${data.username}/${data.title}#Contributing)
  * [Tests](https://github.com/${data.username}/${data.title}#Tests)
  * [Questions](https://github.com/${data.username}/${data.title}#Questions)

## Installation
  ${data.install}

## Usage
  ${data.usage}

## License
  ${fullLicense}

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
function addLicense(license,title,name) {
  
  let filename;
  console.log(license);
  switch (license) {
    case "mit":
      filename = "MIT_LICENSE.txt";
      break;
    case "gpl-3.0":
      filename = "GNU_LICENSE.txt";
      break;
    case "apache-2.0":
      filename = "APACHE_LICENSE.txt";
      break;
    case "isc":
      filename = "ICS_LICENSE.txt";
      break;
  }
 
  let text = fr.readFileSync("./Assets/" + filename,"utf8")
  text = text.replace("[year]",moment().format("YYYY"))
  text = text.replace("[name]",name);
  text = text.replace("[title]",title)
  return text;
}




module.exports = generateMarkdown;
