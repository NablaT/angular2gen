/**
 *
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');

module.exports = generators.Base.extend({

    /**
     * Generator constructor. It reworks the arguments.
     */
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfService= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },

    /**
     * Function writing. This function copies the basic templates for services.
     */
    writing: function () {
        this.argsInKebab = lodash.kebabCase(this.arguments);

        this.basicTemplateSrc = 'src/app/shared/services/src/' + this.argsInKebab;
        this.basicTemplateTest = 'src/app/shared/services/test/' + this.argsInKebab;

        this.copy('services/_basic-template.ts', this.basicTemplateSrc + '.service.ts');
        this.copy('services/_basic-template-test.ts', this.basicTemplateTest + '.service.spec.ts');
    },

});