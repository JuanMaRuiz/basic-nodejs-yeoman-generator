const Generator = require('yeoman-generator');

module.exports = class SimpleScaffolder extends Generator {
  // Instantiate Yeoman Generator
  constructor(args, opts) {
      super(args, opts);
  }

  // Ask the user for his preferences
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
      default: this.projectName,// Default to the current folder,
      store: true
    },
    {
      type: 'input',
      name: 'packageName',
      message: 'Write the desired name property for your package.json',
      default: normalizeName(this.appname),
    },
    {
      type: 'list',
      name: 'dependencyManager',
      message: 'Which depency manager would you like to use?',
      choices: ['npm', 'yarn'],
      store: true
    }
    ]).then( (answers) => {
      this.log('Project Name,', answers.projectName)
      this.log('Package Name,', answers.packageName)
      this.log('Dependency Manager,', answers.dependencyManager)
    })
  }
};

function normalizeName(str) {
  return str.replace(' ', '-');
}
