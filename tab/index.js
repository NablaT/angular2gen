/**
 * Module to generate section into DPS Portal
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');
var common = require('./common-function');


module.exports = generators.Base.extend({

    /**
     * Generator constructor. It reworks the arguments.
     */
    constructor: function () {
        generators.Base.apply(this, arguments);

        //TODO: TO CHANGE: this.hasArgs=true;
        this.hasArgs = false;

        this.argsArray = common.getArgsInArray(this.arguments);
        if(this.argsArray.length == 0) this.hasArgs=false;

        this.reworkArguments = lodash.camelCase(this.arguments);
        this.tabName= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },

    /**
     * Function writing. This function copies the basic templates for services.
     */
    writing: function () {
        if (this.hasArgs) {
            if (this.argsArray.length > 1) {
                this.tabName=this.argsArray[this.argsArray.length-1];
                var pathAndArgs=common.getPathAndArgs(this.argsArray, false);
                this.path= pathAndArgs[0];
                this.argsInKebab = pathAndArgs[1];

                this.basicTemplate = 'src/app/main-content/' + this.path + "/" + this.argsInKebab;
                this.pathForImport ='../../src/'+ this.path+"/"+this.argsInKebab;
            }
            else{
                this.tabName=this.arguments;
                this.argsInKebab = lodash.kebabCase(this.arguments);

                this.basicTemplate = 'src/app/main-content/' +  this.argsInKebab;
                this.pathForImport = '../src/'+this.argsInKebab;
            }
            console.log(" bha ouais: "+this.basicTemplate + '.component.ts')
            this.copy('tab-content/_basic-template.ts', this.basicTemplate + '.component.ts');
            this.copy('tab-content/_basic-template.spec.ts', this.basicTemplate + '.component.spec.ts');
            this.copy('tab-content/_basic-template.html', this.basicTemplate + '.component.html');
            this.copy('tab-content/_basic-template.css', this.basicTemplate + '.component.scss');
        }

    },

});