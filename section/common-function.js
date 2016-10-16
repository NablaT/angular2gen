/**
 * Common function for generation
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');
var fs = require('fs');

var globalTabPath="./src/app/main-content/"

module.exports = {


    getArgsInArray: function (args) {
        var argsArray = [];
        if (args.length > 0) {
            var argumentsInString = "" + args;
            argsArray = argumentsInString.split('/');
        }
        else {
            console.log("Please specify the name of your section in camel case. Eg: MyFirstSection");
        }
        return argsArray;
    },

    tabExists:function(tabName){
        try {
            // Query the entry
            stats = fs.lstatSync(globalTabPath+""+tabName);

            // Is it a directory?
            if (stats.isDirectory()) {
                // Yes it is
                return true;
            }
        }
        catch (e) {
            // ...
        }
        return false;
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

};


