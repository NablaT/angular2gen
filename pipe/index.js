/**
 * Index for pipe generation
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');
var common = require('../common-function');

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
        this.nameOfPipe= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },

    /**
     * Function writing. This function copies the basic templates for pipes.
     */
    writing: function () {
        if (this.hasArgs) {
            if (this.argsArray.length > 1) {
                this.nameOfPipe=this.argsArray[this.argsArray.length-1];
                var pathAndArgs=common.getPathAndArgs(this.argsArray, false);
                this.path= pathAndArgs[0];
                this.argsInKebab = pathAndArgs[1];

                this.basicTemplateSrc = 'src/app/shared/pipes/src/' + this.path + "/" + this.argsInKebab;
                this.basicTemplateTest = 'src/app/shared/pipes/test/' + this.path + "/" + this.argsInKebab;
                this.pathForImport ='../../src/'+ this.path+"/"+this.argsInKebab;
            }
            else{
                this.nameOfPipe=this.arguments;
                this.argsInKebab = lodash.kebabCase(this.arguments);

                this.basicTemplateSrc = 'src/app/shared/pipes/src/' +  this.argsInKebab;
                this.basicTemplateTest = 'src/app/shared/pipes/test/' +  this.argsInKebab;
                this.pathForImport = '../src/'+this.argsInKebab;
            }
            this.copy('pipes/_basic-template.ts', this.basicTemplateSrc + '.pipe.ts');
            this.copy('pipes/_basic-template-test.ts', this.basicTemplateTest + '.pipe.spec.ts');
        }

    },

});