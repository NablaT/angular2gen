var generators = require('yeoman-generator');
var lodash = require('lodash');
const fs = require('fs');

module.exports = generators.Base.extend({

    /**
     * Function askProjectName asks user the project name.
     * We store the answer in the attribute projectTitle.
     */
    askProjectName: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'appName',
            message: 'Your project name: ',
            store: true,
            default: "MyApp"
        }, function (answers) {
            this.projectTitle = answers.appName;
            done();
        }.bind(this));
    },

    /**
     * Function askForBootstrap. This function asks to user if he would like to use Bootstrap.
     * We store his answers in the variable bootstrapValue.
     */
    askForBootstrap: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'bootstrap',
            message: 'Would you like to use Bootstrap? (Y/N)',
            store: true,
            default: "N"  // Default
        }, function (answers) {
            this.bootstrapValue = answers.bootstrap.toLowerCase();
            done();
        }.bind(this));
    },

    /**
     * Function askForFoundation. This function asks to user if he would like to use Foundation.
     * We store his answers in the variable foundationValue.
     */
    askForFoundation: function () {
        if (this.bootstrapValue !== "yes" && this.bootstrapValue !== "y") {
            var done = this.async();
            this.prompt({
                type: 'input',
                name: 'foundation',
                message: 'Would you like to use Foundation? (Y/N)',
                store: true,
                default: "N"  // Default
            }, function (answers) {
                this.foundationValue = answers.foundation.toLowerCase();
                done();
            }.bind(this));
        }
    },


    /**
     * Function askForFontAwesome. This function asks to user if he would like to use Font Awesome.
     * We store his answers in the variable fontAwesomeValue.
     */
    askForFontAwesome: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'fontAwesome',
            message: 'Would you like to use Font Awesome? (Y/N)',
            store: true,
            default: "N"  // Default
        }, function (answers) {
            this.fontAwesomeValue = answers.fontAwesome.toLowerCase();
            done();
        }.bind(this));
    },

    /**
     * Function writing. This function copies the templates according to user choices and build the first version of the application.
     */
    writing: function () {

        this.basicTemplate = 'src/components/' + lodash.kebabCase(this.projectTitle);

        this.copy('_package.json', 'package.json');
        this.copy('_karma-test-shim.js', 'karma-test-shim.js');
        this.copy('_.babelrc', '.babelrc');
        this.copy('_readme.md', 'readme.md');
        this.copy('_.gitignore', '.gitignore');
        this.copy('_tsconfig.json', 'tsconfig.json');
        this.copy('_typings.json', 'typings.json');
        this.copy('_gulpfile.babel.js', 'gulpfile.babel.js');

        this.copy('src/_index.html', 'src/index.html');
        this.copy('src/_systemjs.config.js', 'src/systemjs.config.js');

        this.directory('src/assets', 'src/assets');

        //Component folder creation
        this.copy('src/app/components/_README.md', 'src/app/components/README.md');
        this.copy('src/app/_app.component.ts', 'src/app/app.component.ts');
        this.copy('src/app/_app.component.spec.ts', 'src/app/app.component.spec.ts');
        this.copy('src/app/_app.component.html', 'src/app/app.component.html');
        this.copy('src/app/_app.component.scss', 'src/app/app.component.scss');
        this.copy('src/app/_main.ts', 'src/app/main.ts');
        this.copy('src/app/_app.module.ts', 'src/app/app.module.ts');
        this.copy('src/app/_app.routing.ts', 'src/app/app.routing.ts');
        this.copy('src/app/_main.ts', 'src/app/main.ts');

        var component = ["about", "header", "home"];
        var folderName = ["+about", "header", "+home"];

        for (var i = 0; i < component.length; i++) {
            this.copy('src/app/components/' + folderName[i] + '/_' + component[i] + '.component.html', 'src/app/components/' + folderName[i] + '/' + component[i] + '.component.html');
            this.copy('src/app/components/' + folderName[i] + '/_' + component[i] + '.component.scss', 'src/app/components/' + folderName[i] + '/' + component[i] + '.component.scss');
            this.copy('src/app/components/' + folderName[i] + '/_' + component[i] + '.component.ts', 'src/app/components/' + folderName[i] + '/' + component[i] + '.component.ts');
            this.copy('src/app/components/' + folderName[i] + '/_' + component[i] + '.component.spec.ts', 'src/app/components/' + folderName[i] + '/' + component[i] + '.component.spec.ts');
            this.copy('src/app/components/' + folderName[i] + '/_' + component[i] + '.module.ts', 'src/app/components/' + folderName[i] + '/' + component[i] + '.module.ts');

            try {
                this.copy('src/app/components/' + folderName[i] + '/_' + component[i] + '.routing.ts', 'src/app/components/' + folderName[i] + '/' + component[i] + '.routing.ts');
            } catch (ex) {}

            this.copy('src/app/components/' + folderName[i] + '/_index.ts', 'src/app/components/' + folderName[i] + '/index.ts');
        }

        this.directory('src/app/shared', 'src/app/shared');
        this.directory('src/app/components/core', 'src/app/components/core');

        //Styles folder and content creation
        //We initialise the message which appears in the readme of the style folder. We give two different message
        //if sass has been installed or not.
        this.messageInReadMe = "";

        this.messageInReadMe = "Initially, we generate two files: " +
            "- main.scss: File Sass which defines the common part in the design of the application" +
            "- variables.scss: Contains all css variables used for the design";

        if (this.bootstrapValue === "y" || this.bootstrapValue === "yes") {
            if (this.fontAwesomeValue === "y" || this.fontAwesomeValue === "yes") {
                this.copy('src/styles/_main-bootstrap-font.scss', 'src/styles/main.scss');
            }
            else {
                this.copy('src/styles/_main-bootstrap.scss', 'src/styles/main.scss');
            }
        }
        else if (this.foundationValue === "y" || this.foundationValue === "yes") {
            if (this.fontAwesomeValue === "y" || this.fontAwesomeValue === "yes") {
                this.copy('src/styles/_main-foundation-font.scss', 'src/styles/main.scss');
            }
            else {
                this.copy('src/styles/_main-foundation.scss', 'src/styles/main.scss');
            }
            this.copy('src/app/components/+about/_about-foundation.component.html', 'src/app/components/+about/about.component.html');
            this.copy('src/app/components/+home/_home-foundation.component.html', 'src/app/components/+home/home.component.html');
            this.copy('src/app/components/+home/_home-foundation.component.scss', 'src/app/components/+home/home.component.scss');
            this.copy('src/app/components/header/_header-foundation.component.html', 'src/app/components/header/header.component.html');
        }
        else {
            this.copy('src/styles/_main.scss', 'src/styles/main.scss');
        }
        this.copy('src/styles/_variables.scss', 'src/styles/_variables.scss');

        this.copy('src/styles/_README.md', 'src/styles/README.md');

        this.directory("src/styles/core", "src/styles/core");

        //Copy grunt tasks
        this.directory("gulp", "gulp");
    },

    /**
     * Function installBootstrapOrFoundation. This function checks if user want to install Bootstrap or Foundation.
     * If one of those framework has been chosen, the function install it.
     */
    installBootstrapOrFoundation: function () {
        if (this.bootstrapValue === "y" || this.bootstrapValue === "yes") {
            this.npmInstall(['bootstrap@4.0.0-alpha.2'], {'save': true}); //npm install bootstrap@4.0.0-alpha.2 --save
        }
        else if (this.foundationValue === "y" || this.foundationValue === "yes") {
            this.npmInstall(['foundation-sites'], {'save': true}); //npm install foundation-sites --save
        }
    },

    /**
     * Function installFontAwesome. This function checks if user want to install FontAwesome, if yes it runs the installation.
     */
    installFontAwesome: function () {
        if (this.fontAwesomeValue === "y" || this.fontAwesomeValue === "yes") {
            this.npmInstall(['font-awesome'], {'save': true}); //npm install font-awesome --save
        }
    },

    /**
     * Function install. This function installs all dependencies according to user choices.
     */
    install: function () {
        this.npmInstall(['gulp-cli'], {'g': true});
        this.npmInstall(); //npm install
    },

});