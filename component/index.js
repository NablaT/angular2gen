var generators = require('yeoman-generator');
var lodash = require('lodash');
var fs = require('fs');
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
        this.messages = [];
    },

    /**
     * Function writing. This function copies the basic templates for components.
     */
    writing: function () {
        if (this.hasArgs) {
            if (this.argsArray.length > 1) {
                var pathAndArgs = common.getPathAndArgs(this.argsArray,true);
                this.componentName = this.nameOfComponent;

                this.path= pathAndArgs[0];
                this.argsInKebab = lodash.kebabCase(this.path);

                this.basicTemplate = 'src/app/components/' +this.path + '/' + lodash.kebabCase(this.path);

                this.copy('components/_index.child.ts', 'src/app/components/' +this.path + '/index.ts');

                this.messages.push('Define the component (' + this.componentName + 'Component) into parent\'s module file.');
                this.messages.push('Add your routes into parent\'s routing file.');
            }
            else {
                this.componentName = this.arguments;
                this.argsInKebab = lodash.kebabCase(this.arguments);
                this.path=  lodash.kebabCase(this.arguments);
                this.basicTemplate = 'src/app/components/' + this.path + '/' + this.argsInKebab;

                this.copy('components/_basic.routing.ts', this.basicTemplate + '.routing.ts');
                this.copy('components/_index.ts', 'src/app/components/' +this.path + '/index.ts');
                this.copy('components/_basic.module.ts', this.basicTemplate + '.module.ts');

                this.messages.push('Add `' + this.componentName + 'Module` into your root module->imports')
            }
            this.copy('components/_basic-template.html', this.basicTemplate + '.component.html');
            this.copy('components/_basic-template.ts', this.basicTemplate + '.component.ts');
            this.copy('components/_basic-template.css', this.basicTemplate + '.component.scss');
            this.copy('components/_basic-template-test.ts', this.basicTemplate + '.component.spec.ts');
        }
    },

    end: function () {
        for(let i = 0; i < this.messages.length; i++) {
            this.log(this.messages[i]);
        }
    }
});