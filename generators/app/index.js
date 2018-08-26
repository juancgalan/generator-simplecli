'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Simple command line ${chalk.red('generator-simplecli')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'appname',
        message: "What is the project's name?",
        default: this.appname
      },
      {
        type: 'input',
        name: 'authorname',
        message: "Author's name?",
        store: true
      },
      {
        type: 'input',
        name: 'repository',
        message: "Repository?",
      },
      {
        type: 'list',
        name: 'license',
        message: "License?",
        choices: ['MIT', 'Apache', 'cc3', 'GNU', 'lGNU'],
        default: 'MIT',
      },
    ];

    return this.prompt(prompts)
      .then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props
      });
  }
  

  writing() {
     this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('_src/_main/_app.js'),
      this.destinationPath('src/main/app.js'))
    this.fs.copy(
      this.templatePath('_src/_test/_app.test.js'),
      this.destinationPath('src/test/app.test.js'))
    this.fs.copy(
      this.templatePath('_.babelrc'),
      this.destinationPath('.babelrc')) 
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        appname: this.props.appname,
        authorname: this.props.authorname,
        license: this.props.license,
        repository: this.props.repository
      }
    )
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    })
  }
}
