/**
 * Created by rpourtier on 10/03/2016.
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfDirective= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },

    writing: function () {
        this.argsInKebab = lodash.kebabCase(this.arguments);

        this.basicTemplateSrc = 'src/shared/directives/src/' + this.argsInKebab;
        this.basicTemplateTest = 'src/shared/directives/test/' + this.argsInKebab;

        this.copy('directives/_basic-template.ts', this.basicTemplateSrc + '.directive.ts');
        this.copy('directives/_basic-template-test.ts', this.basicTemplateTest + '.directive.spec.ts');
    },

});