/**
 * Index for directive generation
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');
var common = require('./common-function');

module.exports = generators.Base.extend({

    /**
     * Generator constructor. Verifies the number of arguments and reworks them.
     */
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.hasArgs = true;

        this.argsArray = common.getArgsInArray(this.arguments);
        if(this.argsArray.length == 0) this.hasArgs=false;

        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfDirective= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },

    /**
     * Function writing. This function copies the basic templates for directives.
     */
    writing: function () {
        if (this.hasArgs) {
            if (this.argsArray.length > 1) {
                this.nameOfDirective=this.argsArray[this.argsArray.length-1];
                var pathAndArgs=common.getPathAndArgs(this.argsArray, false);
                this.path= pathAndArgs[0];
                this.argsInKebab = pathAndArgs[1];

                this.basicTemplateSrc = 'src/app/shared/directives/src/' + this.path + "/" + this.argsInKebab;
                this.basicTemplateTest = 'src/app/shared/directives/test/' + this.path + "/" + this.argsInKebab;
                this.pathForImport ='../../src/'+ this.path+"/"+this.argsInKebab;
            }
            else{
                this.nameOfDirective=this.arguments;
                this.argsInKebab = lodash.kebabCase(this.arguments);

                this.basicTemplateSrc = 'src/app/shared/directives/src/' +  this.argsInKebab;
                this.basicTemplateTest = 'src/app/shared/directives/test/' +  this.argsInKebab;
                this.pathForImport = '../src/'+this.argsInKebab;
            }
            this.copy('directives/_basic-template.ts', this.basicTemplateSrc + '.directive.ts');
            this.copy('directives/_basic-template-test.ts', this.basicTemplateTest + '.directive.spec.ts');
        }

    },

});