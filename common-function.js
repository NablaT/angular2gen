/**
 * Common function for generation
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');
var json = require('fs');


module.exports = {


    getArgsInArray: function (args) {
        var argsArray = [];
        if (args.length > 0) {
            var argumentsInString = "" + args;
            argsArray = argumentsInString.split('/');
        }
        else {
            console.log("Please specify the name of your component in camel case. Eg: MyFirstItem");
        }
        return argsArray;
    },

    getPathAndArgs: function (argsArray, haveToCreateFolder) {
        var path = "";
        var argsInKebab = "";
        var pathArgs = [];
        var length= argsArray.length;
        if(!haveToCreateFolder) length--;
        this.componentName = argsArray[argsArray.length - 1];
        for (var i = 0; i < length; i++) {
            var addAPlus = "";
            if (argsArray[i].indexOf("+") > -1) {
                addAPlus = "+";
            }
            if (i == 0) {
                path = addAPlus + lodash.kebabCase(argsArray[i]);
            }
            else {
                path = path + '/' + addAPlus + lodash.kebabCase(argsArray[i]);
            }
        }
        argsInKebab = lodash.kebabCase(argsArray[argsArray.length - 1]);
        pathArgs.push(path);
        pathArgs.push(argsInKebab);

        return pathArgs;
    }

}


