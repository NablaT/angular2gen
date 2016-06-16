/**
 * Common function for generation
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');
var json = require('fs');


module.exports={


    getNumberOfArguments: function (args){
        console.log('ouais poto, args: '+args);
        if (this.arguments.length > 0) {
            var argumentsInString = "" + this.arguments;
            this.argsArray = argumentsInString.split('/');

        }
        else {
            console.log("Please specify the name of your component in camel case. Eg: MyFirstItem");
            this.hasArgs = false;
        }
    },

    getBackFileAndPath: function(){

    }

}


