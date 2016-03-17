/**
 * Created by rpourtier on 16/03/2016.
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');
var json = require('fs');

var checkSass = function checkSass() {
    console.log("oui bien sur");
    this.hasSass = false;
    var jsonContent = json.readFileSync("./_package.json", 'utf8');
    var storeJson = JSON.parse(jsonContent);
    for (var currentKey in storeJson.dependencies) {
        if (currentKey == "gulp-sass") {
            this.hasSass = true;
        }
    }
}
