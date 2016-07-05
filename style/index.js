var generators = require('yeoman-generator');
var lodash = require('lodash');
var json = require('fs');
var common = require('./common-function');

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
        this.hasArgs = true;

        this.argsArray = common.getArgsInArray(this.arguments);
        if(this.argsArray.length == 0) this.hasArgs=false;

        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfStyle = this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },


    /**
     * Function writing. This function copies the basic templates for global styles.
     */
    writing: function () {

        if (this.hasArgs) {
            if (this.argsArray.length > 1) {
                this.nameOfDirective=this.argsArray[this.argsArray.length-1];
                var pathAndArgs=common.getPathAndArgs(this.argsArray, false);
                this.path= pathAndArgs[0];
                this.argsInKebab = pathAndArgs[1];

                this.basicTemplate = 'src/styles/' + this.path + "/" + this.argsInKebab;
            }
            else{
                this.nameOfDirective=this.arguments;
                this.argsInKebab = lodash.kebabCase(this.arguments);

                this.basicTemplate = 'src/styles/' +  this.argsInKebab;
            }
            this.copy('styles/_basic-template.css', this.basicTemplate + '.scss');
        }

    },

});