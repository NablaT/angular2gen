var generators = require('yeoman-generator');
var lodash = require('lodash');
var json = require('fs');
var common = require('./common-function');

/**
 * Component generator. While user runs the command "yo angular2project:component ComponentName",
 * every function in the generator will be ran in order to generate a component with the following strucutre:
 * component-name.component.ts : The heart the component
 * component-name.component.spec.ts:  The test of the previous ts file
 * component-name.component.css or .scss: The component style
 * component-name.componenent.html: The html file of the component.
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
        this.nameOfComponent = this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },

    /**
     * Function writing. This function copies the basic templates for components.
     */
    writing: function () {
        if (this.hasArgs) {
            if (this.argsArray.length > 1) {
                this.componentName=this.argsArray[this.argsArray.length-1];

                var pathAndArgs=common.getPathAndArgs(this.argsArray,true);
                this.path= pathAndArgs[0];
                this.argsInKebab = pathAndArgs[1];
                this.basicTemplate = 'src/app/components/' +this.path + '/' + this.argsInKebab;
            }
            else {
                this.componentName=this.arguments;
                this.argsInKebab = lodash.kebabCase(this.arguments);
                this.path=  lodash.kebabCase(this.arguments);
                this.basicTemplate = 'src/app/components/' + this.path + '/' + this.argsInKebab;
            }
            this.copy('components/_basic-template.html', this.basicTemplate + '.component.html');
            this.copy('components/_basic-template.ts', this.basicTemplate + '.component.ts');
            this.copy('components/_basic-template.module.ts', this.basicTemplate + '.module.ts');
            this.copy('components/_basic-template.routing.ts', this.basicTemplate + '.routing.ts');
            this.copy('components/_basic-template.css', this.basicTemplate + '.component.scss');
            this.copy('components/_basic-template-test.ts', this.basicTemplate + '.component.spec.ts');
            this.copy('components/_index.ts', 'src/app/components/' +this.path + '/index.ts');
        }
    },

});