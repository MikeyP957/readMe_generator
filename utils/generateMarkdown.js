// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== null){
    badge = license[0]
    switch(badge){
      case 'Apache License v2.0':
        badge ='[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GNU General Public License v3.0':
        badge ='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
      case 'MIT License':
        badge ='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      case 'Mozilla Public License 2.0':
        badge ='[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        break;
    }
    return badge;
  }
  else return '';
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license != null){
    link = license[0]
    switch(link){
      case 'Apache License v2.0':
        link ='https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#apache-20-license';
        break;
      case 'GNU General Public License v3.0':
        link ='https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#gnu-gpl-v3';
        break;
      case 'MIT License':
        link ='https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#the-mit-license';
        break;
      case 'Mozilla Public License 2.0':
        link ='https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#mozilla-public-license-20';
        break;
    }
    return link;
  }
  else return '';
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != null){
    return `The license for this project is the ${license} license.
    To read more about this license follow the link below.
    [${license} link](${renderLicenseLink(license)})`
      }
  else return '';
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName} ${renderLicenseBadge(data.license)}
  ## Description: 
  ${data.description}
  ## Table of contents: 
  1. [Installation](#Installation)
  1. [Usage](#Usage-Instructions)
  1. [License](#License)
  1. [Contributing](#Contributing-Guidelines)
  1. [Testing](#Testing)
  1. [Questions](#Questions)

  ## Installation:  
  ${data.installation}

  ## Usage Instructions:
  ${data.usage}

  ## License:${data.license}
  ${renderLicenseSection(data.license)}

  ## Contributing Guidelines:
  ${data.contributing}

  ## Testing:
  ${data.test}

  ## Questions:
  Contact me with any further questions via email:
  ${data.email}
  Or my github:
  [github.com/${data.github}]`;
}

module.exports = generateMarkdown;

