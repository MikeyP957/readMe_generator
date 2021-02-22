// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== null){
    switch(license){
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== null){
    switch(license){
      case 'Apache License v2.0':
        link ='https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#apache-20-license';
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;


//Apache: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#apache-20-license
//[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

//GNU https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#gnu-gpl-v3
//[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

//MIT: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#the-mit-license
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

//Mozilla https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#mozilla-public-license-20
//[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)