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
      this.config = {
        packageName: answers.packageName,
        projectName: answers.projectName,
        dependencyManager: answers.dependencyManager
      };
      this.log('These are your selections ,', this.config);
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        packageName: this.config.packageName
      }
    );
    this.fs.copyTpl(
      this.templatePath('server.js'),
      this.destinationPath('server.js'),
      {
        projectName: this.config.projectName
      }
    );

    // Install the dependencies with the proper dependency manager
    (this.config.depManager === 'yarn') ? this.yarnInstall() : this.npmInstall();
  };
};

function normalizeName(str) {
  return str.replace(' ', '-');
}
