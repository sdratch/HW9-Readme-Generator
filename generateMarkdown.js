const moment = require("moment");
const fr = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  addLicense(data.licences,data.title,data.username);
  return `# ${data.title}
[![made-with-README](https://img.shields.io/badge/Made%20With-README%20Generator-blue)](https://www.github.com/sdratch/HW9-Readme-Generator)

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
  This project is licensed under the ${data.licences} License. - see the [License.md](https://github.com/${data.username}/${data.title}/blob/master/LICENSE.md) file for details

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
  fr.writeFile("LICENSE.md",text,function(err){
    if(err){
      throw err;
    }
  })
}




module.exports = generateMarkdown;
