'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the peachy ${chalk.red('generator-yeoleven')} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Site Name",
        default: "mysite"
      },
      {
        type: "confirm",
        name: "tailwind",
        message: "Install tailwind?",
        default: false
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const src = this.sourceRoot();

    const dest = this.destinationPath(`${this.props.name}`);

    //The ignore array is used to ignore files, push file names into this array that you want to ignore.
    const copyOpts = {
      globOptions: {
        ignore: []
      }
    };

    // if (!this.props.mongodb)
    //   copyOpts.globOptions.ignore.push(src + "/mongoose.js");

    if (!this.props.tailwind) {
      copyOpts.globOptions.ignore.push(src + "/tailwind.config.js");
    }

    this.fs.copy(src, dest, copyOpts);

    const hiddenFiles = ['.eleventy.js','.browserslistrc']

    // const files = ["*"];

    const opts = {
      name: this.props.name,
      tailwind: this.props.tailwind
    };

    hiddenFiles.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(`${this.props.name}/${file}`),
        opts,
        copyOpts
      );
    });


    const templateFiles = ["package.json", "src/_data/site.json"];
    
    templateFiles.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(`${this.props.name}/${file}`),
        opts,
        copyOpts
      );
    });
  }

  install() {
    console.log(process.cwd(), path.join(process.cwd(), this.props.name));
    const appDir = path.join(process.cwd(), this.props.name);
    process.chdir(appDir);
  }
};
