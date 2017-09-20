const Generator = require('yeoman-generator');

module.exports = class SimpleScaffolder extends Generator {
  // Instantiate Yeoman Generator
  constructor(args, opts) {
      super(args, opts);
  }

  // Ask the user for his preferences
  prompting() {
    return this.prompt([{
      type: "input",
      name: "name",
      message: "Dummy message",
      default: this.appname,// Default to the current folder,
      store: true
    }]).then( (answers) => {
      this.log('appname', answers.name)
    })
  }
};
