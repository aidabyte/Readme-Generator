// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title : ${data.title} 

## Table of Contents
1. Description
2. Installation
3. Usage
4. Contributors
5. Test
6. License
7. Email


  ## Project Descripstion : ${data.description}

  ## Installation : ${data.installation}

  ## Usage : ${data.usage}

  ## Contribution : ${data.contributors}

  ## Test : ${data.test}

  ## License : ${data.license}

  ## Email : ${data.email}


        


`;
}

module.exports = generateMarkdown;
