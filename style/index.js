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
        this.nameOfStyle = this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },


    /**
     * Function writing. This function copies the basic templates for global styles.
     */
    writing: function () {
        this.argsInKebab = lodash.kebabCase(this.arguments);
        this.basicTemplate = 'src/styles/' + this.argsInKebab;
        this.copy('styles/_basic-template.css', this.basicTemplate + '.scss');
    },

});