/**
 * Index for pipe generation
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');
var common = require('../common-function');

module.exports = generators.Base.extend({

    /**
     * Generator constructor. It reworks the arguments.
     */
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.hasArgs = true;
        common.getNumberOfArguments("CHUI UN ARG");
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfPipe= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },

    /**
     * Function writing. This function copies the basic templates for pipes.
     */
    writing: function () {
        this.argsInKebab = lodash.kebabCase(this.arguments);

        common.getPathAndArgs()
        /**
        this.basicTemplateSrc = 'src/app/shared/pipes/src/' + this.argsInKebab;
        this.basicTemplateTest = 'src/app/shared/pipes/test/' + this.argsInKebab;

        this.copy('pipes/_basic-template.ts', this.basicTemplateSrc + '.pipe.ts');
        this.copy('pipes/_basic-template-test.ts', this.basicTemplateTest + '.pipe.spec.ts');**/
    },

});