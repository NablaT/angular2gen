var generators = require('yeoman-generator');
var lodash = require('lodash');
var json = require('fs');

/**
 * Global style generator. While user runs the command "yo angular2project NameOfTheGlobalStyle"
 * every function in the generator will be ran in order to generate a global style.
 * @type {void|*}
 */
module.exports = generators.Base.extend({

    /**
     * Generator constructor. It reworks the arguments.
     */
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfStyle= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },

    /**
     * Function checkSass. This function reads the file _package.json to know if user asked to install sass.
     */
    checkSass: function () {
        this.hasSass=false;
        var jsonContent=json.readFileSync("./package.json", 'utf8');
        var storeJson= JSON.parse(jsonContent);
        for(var currentKey in storeJson.dependencies) {
            if(currentKey=="gulp-sass"){
                this.hasSass=true;
            }
        }
    },


    /**
     * Function writing. This function copies the basic templates for global styles.
     */
    writing: function () {
        this.argsInKebab = lodash.kebabCase(this.arguments);

        this.basicTemplate= 'src/shared/styles/' + this.argsInKebab;
        if(this.hasSass){
            this.copy('styles/_basic-template.css', this.basicTemplate + '.scss');
        }
        else{
            this.copy('styles/_basic-template.css', this.basicTemplate + '.css');
        }
    },

});