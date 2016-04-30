var generators = require('yeoman-generator');
var lodash = require('lodash');

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
     * Function askForSass. This function asks to user if he would like to use Sass.
     * We store his answers in the variable sassValue.
     */
    askForSass: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'sass',
            message: 'Would you like to use Sass? (Y/N)',
            store: true,
            default: "N" // Default
        }, function (answers) {
            this.sassValue = answers.sass.toLowerCase();
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
        this.copy('_readme.md', 'readme.md');
        this.copy('_gitignore', '.gitignore');
        this.copy('_tsconfig.json', 'tsconfig.json');
        this.copy('_typings.json', 'typings.json');
        this.copy('_gulpfile.ts', 'gulpfile.ts');

        this.copy('src/_main.ts', 'src/main.ts');
        this.copy('src/_index.html', 'src/index.html');

        this.copy('src/assets/_README.md', 'src/assets/README.md');

        //Component folder creation
        this.copy('src/components/_README.md', 'src/components/README.md');
        var component=["app","about","header", "home"];
        for(var i=0;i<component.length;i++){
            this.copy('src/components/'+component[i]+'/_'+component[i]+'.component.html', 'src/components/'+component[i]+'/'+component[i]+'.component.html');
            if (this.sassValue=== "yes" || this.sassValue=== "y") {
                this.copy('src/components/'+component[i]+'/_'+component[i]+'.component.scss', 'src/components/'+component[i]+'/'+component[i]+'.component.scss');
            }
            else{
                this.copy('src/components/app/_app.component.css', 'src/components/'+component[i]+'/'+component[i]+'.component.css');
            }
            this.copy('src/components/'+component[i]+'/_'+component[i]+'.component.ts', 'src/components/'+component[i]+'/'+component[i]+'.component.ts');
            this.copy('src/components/'+component[i]+'/_'+component[i]+'.component.spec.ts', 'src/components/'+component[i]+'/'+component[i]+'.component.spec.ts');

        }

        this.copy('src/shared/_README.md', 'src/shared/README.md');

        //Directives folders and content creation
        this.copy('src/shared/directives/_README.md', 'src/shared/directives/README.md');
        this.copy('src/shared/directives/src/_README.md', 'src/shared/directives/src/README.md');
        this.copy('src/shared/directives/test/_README.md', 'src/shared/directives/test/README.md');

        //Services folders and content creation
        this.copy('src/shared/services/_README.md', 'src/shared/services/README.md');
        this.copy('src/shared/services/src/_README.md', 'src/shared/services/src/README.md');
        this.copy('src/shared/services/test/_README.md', 'src/shared/services/test/README.md');

        //Styles folder and content creation
        //We initialise the message which appears in the readme of the style folder. We give two different message
        //if sass has been installed or not.
        this.messageInReadMe="";
        if (this.sassValue=== "yes" || this.sassValue=== "y") {
            this.messageInReadMe="Initially, we generate two files: " +
                "- main.scss: File Sass which defines the common part in the design of the application" +
                "- variables.scss: Contains all css variables used for the design";

            if(this.bootstrapValue === "y" || this.bootstrapValue === "yes"){
                if(this.fontAwesomeValue === "y" || this.fontAwesomeValue === "yes"){
                    this.copy('src/shared/styles/_main-bootstrap-font.scss', 'src/shared/styles/main.scss');
                }
                else{
                    this.copy('src/shared/styles/_main-bootstrap.scss', 'src/shared/styles/main.scss');
                }
            }
            else if(this.foundationValue === "y" || this.foundationValue === "yes"){
                if(this.fontAwesomeValue === "y" || this.fontAwesomeValue === "yes"){
                    this.copy('src/shared/styles/_main-foundation-font.scss', 'src/shared/styles/main.scss');
                }
                else{
                    this.copy('src/shared/styles/_main-foundation.scss', 'src/shared/styles/main.scss');
                }
            }
            else{
                this.copy('src/shared/styles/main.scss', 'src/shared/styles/main.scss');
            }
            this.copy('src/shared/styles/_variables.scss', 'src/shared/styles/_variables.scss');
        }
        else{
            //TODO: Add global css if user didn't choose Sass
        }
        this.copy('src/shared/styles/_README.md', 'src/shared/styles/README.md');
        this.fontAwesomeContentSCSS="bondour";
        //Copy grunt tasks
        this.copy('gulp/README.md', 'gulp/README.md');
        this.copy('gulp/gulp.conf.ts', 'gulp/gulp.conf.ts');
        this.copy('gulp/browsersync.ts', 'gulp/browsersync.ts');
        this.copy('gulp/tasks/gulp-clean.ts', 'gulp/tasks/gulp-clean.ts');
        this.copy('gulp/tasks/gulp-copy.ts', 'gulp/tasks/gulp-copy.ts');
        this.copy('gulp/tasks/gulp-inject.ts', 'gulp/tasks/gulp-inject.ts');
        this.copy('gulp/tasks/gulp-sass.ts', 'gulp/tasks/gulp-sass.ts');
        this.copy('gulp/tasks/gulp-serve.ts', 'gulp/tasks/gulp-serve.ts');
        this.copy('gulp/tasks/gulp-typescript.ts', 'gulp/tasks/gulp-typescript.ts');
        this.copy('gulp/tasks/gulp-watch.ts', 'gulp/tasks/gulp-watch.ts');

        //Manual typings folder
        this.copy('manual_typings/README.md', 'manual_typings/README.md');
        this.copy('manual_typings/connect-history-api-fallback.d.ts', 'manual_typings/connect-history-api-fallback.d.ts');
        this.copy('manual_typings/require-dir.d.ts', 'manual_typings/require-dir.d.ts');
        this.copy('manual_typings/manual-typings.d.ts', 'manual_typings/manual-typings.d.ts');


    },

    /**
     * Function installSass. This function checks if user want to install Sass, if yes it runs the installation.
     */
    installSass: function(){
        if (this.sassValue=== "yes" || this.sassValue=== "y") {
            this.npmInstall(['gulp-sass'], { 'save': true }); //npm install gulp-sass --save
        }
    },

    /**
     * Function installBootstrapOrFoundation. This function checks if user want to install Bootstrap or Foundation.
     * If one of those framework has been chosen, the function install it.
     */
    installBootstrapOrFoundation: function(){
        if (this.bootstrapValue === "y" || this.bootstrapValue === "yes") {
            this.npmInstall(['bootstrap@4.0.0-alpha.2'], { 'save': true }); //npm install bootstrap@4.0.0-alpha.2 --save
        }
        else if (this.foundationValue === "y" || this.foundationValue === "yes" ) {
            this.npmInstall(['foundation-sites'], { 'save': true }); //npm install foundation-sites --save
        }
    },

    /**
     * Function installFontAwesome. This function checks if user want to install FontAwesome, if yes it runs the installation.
     */
    installFontAwesome: function(){
        if (this.fontAwesomeValue === "y" || this.fontAwesomeValue === "yes" ) {
            this.npmInstall(['font-awesome'], { 'save': true }); //npm install font-awesome --save
        }
    },

    /**
     * Function install. This function installs all dependencies according to user choices.
     */
    install: function () {
        this.npmInstall(['gulp-cli'], { 'g': true });
        this.npmInstall(); //npm install
        //this.spawnCommand('gulp', ['serve']);
    },

    /*runApp: function(){
        this.spawnCommand('gulp', ['serve']);
    }*/
});