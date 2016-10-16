/**
 * Module to generate section into DPS Portal
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');
var common = require('./common-function');
var fileManager = require('html-wiring');
var fs = require('fs');


module.exports = generators.Base.extend({

    /**
     * Function askForSections asks to the users if they want to have a section
     * into the tab they generate.
     * We store the answer in the attribute sectionRequested.
     */
    askForSections: function () {

        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'sectionRequested',
            message: 'Would you like to have a section in the tab? (Y/N)',
            store: true,
            default: "N"  // Default
        }, function (answers) {
            this.sectionRequested = answers.sectionRequested.toLowerCase();
            done();
        }.bind(this));
    },

    /**
     * Generator constructor. It reworks the arguments.
     */
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.hasArgs = true;

        this.argsArray = common.getArgsInArray(this.arguments);
        //if (this.argsArray.length == 0) this.hasArgs = false;
        this.argsInKebab = lodash.kebabCase(this.arguments);
        if (this.argsArray.length == 0){
            this.log("Exit.");
            process.exit();
        }
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.tabName = this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },


    /**
     * Function writing. This function copies the basic templates for services.
     */
    writing: function () {
        this.tabName = this.arguments;

        this.basicTemplate = 'src/app/main-content/' + this.argsInKebab + '-tab/' ;

        this.pathForImport = '../src/' + this.argsInKebab;

        this.copy('tab-content/tab.component.ts', this.basicTemplate + this.argsInKebab+ '-tab.component.ts');
        this.copy('tab-content/tab.component.spec.ts', this.basicTemplate+ this.argsInKebab + '-tab.component.spec.ts');
        this.copy('tab-content/tab.component.scss', this.basicTemplate+ this.argsInKebab + '-tab.component.scss');
        if (this.sectionRequested === "y") {
            //this.directory('tab-content/my-section', 'src/app/main-content/' + this.argsInKebab + '-tab/' + this.argsInKebab + '-section');
            var subTemplate=this.argsInKebab +"-section/"+this.argsInKebab
            this.copy('tab-content/tabWithSection.component.html', this.basicTemplate +this.argsInKebab + '-tab.component.html');
            this.copy('tab-content/my-section/my-section.component.ts', this.basicTemplate +subTemplate+ '-section.component.ts');
            this.copy('tab-content/my-section/my-section.component.html', this.basicTemplate +subTemplate+ '-section.component.html');
            this.copy('tab-content/my-section/my-section.component.spec.ts', this.basicTemplate +subTemplate+ '-section.component.spec.ts');
            this.copy('tab-content/my-section/my-section.component.scss', this.basicTemplate +subTemplate+ '-section.component.scss');
        }
        else{
            this.copy('tab-content/tab.component.html', this.basicTemplate+ this.argsInKebab + '-tab.component.html');
        }
    },

    updateModule: function () {
        //Structure of the cut file:
        //All import statements: import {} from 'path'
        //NgModule tag
        //Ino NgModule we find Declarations tag
        //Rest of the file
        var path = "src/app/main-content/main-content.module.ts",
            file = fileManager.readFileAsString(path),
            componentName = this.tabName + "TabComponent",
            componentFileName = this.argsInKebab + '-tab',
            splitedFile = file.split("\n@NgModule");

        if (splitedFile.length == 2) {
            // We create the new component import statement


            var importSection="";
            var declarationSection="";
            if(this.sectionRequested === "y"){
                importSection="\nimport {" +this.tabName +
                    "SectionComponent} from './" +this.argsInKebab+
                    "-tab/" +this.argsInKebab+
                    "-section/" +this.argsInKebab+
                    "-section.component';";
                declarationSection="\n\t\t"+this.tabName +
                    "SectionComponent,";
            }

            var importComponent = "import {" + componentName +
                "} from \'./" + componentFileName +
                "/" + componentFileName +
                ".component\';"+importSection;
            //We split the second part of the file according to the tag declaration
            var secondSplitForDeclaration = splitedFile[1].split("declarations: [");

            if (secondSplitForDeclaration.length == 2) {
                //We add the component into the declaration tag
                var declarationComponent = "declarations: [\n\t\t" + this.tabName + "TabComponent,"+declarationSection;

                //We bring all the pieces together.
                var finalFile = splitedFile[0] + importComponent + "\n\n@NgModule" + secondSplitForDeclaration[0] + declarationComponent + secondSplitForDeclaration[1];
                fs.writeFile(path, finalFile, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });
            }
            else {
                console.log("Insertion failed: A problem occurs while the tag component insertion into the main-content.module.\n The tag \'declaration\' does not seem to appear only one time in the file.")
            }
        }
        else {
            console.log("A problem has occurred while the tag component insertion into the main-content.module. Insertion failed.\n The tag \'NgModule\' does not seem to appear only one time in the file.")
        }
    },


    updateRoutingHTML: function () {
        var componentFileName = this.argsInKebab + '-tab';
        var path = "src/app/main-content/main-content.component.html";
        var file = fileManager.readFileAsString(path);
        //var splitedFile = file.split("<nav id=\"routingTab\">");

        var splitedFile = file.split("<!-- Generator Hook for tab, do not delete this line -->");
        if (splitedFile.length > 0) {

            //var endNavigation = splitedFile[1].split("</nav>");
            var routingNewComponent = "<li><a routerLink=\"" + componentFileName +
                "\">" + this.tabName +
                "</a></li>";
            var finalFile = splitedFile[0] + routingNewComponent
                + "\n\t\t"+ "<!-- Generator Hook for tab, do not delete this line -->" +splitedFile[1];

            fs.writeFile(path, finalFile, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            //"<nav id=\"routingTab\">" +
            /**if (endNavigation.length > 0) {
                var routingNewComponent = "\t\t<a routerLink=\"" + componentFileName +
                    "\" class=\"tabItem\">" + this.tabName +
                    "</a>";
                var finalFile = splitedFile[0] + "<!-- Generator Hook for tab, do not delete this line -->" +
                    endNavigation[0] + "\n" + routingNewComponent +
                    "\n\t</nav>"  ;
                for(var i=1;i<endNavigation.length;i++){
                    finalFile+=endNavigation[i];
                }

                fs.writeFile(path, finalFile, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });

            }
            else {
                this.log("Update Navigation: Error.\n " +
                    "An error has occurred while trying to find the tag: </nav>");
            }**/
        }
        else {
            this.log("Update Navigation: Error.\n " +
                "An error has occurred while trying to find the tag: <nav id=\"routingTab\">");
        }
    },


     updateRoutingTS: function () {
        var componentFileName = this.argsInKebab + '-tab';
        var componentName = this.tabName + "TabComponent";
        var path = "src/app/main-content/main-content.routing.ts";
        var file = fileManager.readFileAsString(path);
        var splitedFile = file.split("export const MainContentRoute:Route[] = [");


        if (splitedFile.length > 1) {
            var splitByRoute = splitedFile[1].split("]");
            if (splitByRoute.length > 1) {
                //Now we have all the route into splitByRoute[0] and we just
                //have to add our new route at the end of the route list
                var currentRoute = ",\n{\n\t\t path: \'" +
                    componentFileName + "\',\n\t\t component: " +
                    this.tabName + "TabComponent\n}\n";

                var importStatement = "import {" + componentName +
                    "} from \'./" + componentFileName +
                    "/" + componentFileName +
                    ".component\';";

                var finalFile = splitedFile[0] + importStatement +
                    "\nexport const MainContentRoute: Route[] = [" + splitByRoute[0]
                    + currentRoute + "]" + splitByRoute[1];

                fs.writeFile(path, finalFile, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });
            }
        }


    }
});