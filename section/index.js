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
     * Function askForTab asks to the users if they want to have a section
     * into the tab they generate.
     * We store the answer in the attribute sectionRequested.
     */
    askForSections: function () {
         var done = this.async();
         this.prompt({
            type: 'input',
            name: 'tabRequested',
            message: 'In which tab would you like to add this section? (tab-name format)',
            store: true,
            default: ""  // Default
        }, function (answers) {
            this.tabRequested = answers.tabRequested.toLowerCase();
            var tabExists=common.tabExists(lodash.kebabCase(this.tabRequested));
            if(!tabExists){
                this.log("Component not found: "+lodash.kebabCase(this.tabRequested)+". Please try again.");
                this.askForSections();
            }
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


        if (this.argsArray.length == 0) {
            this.log("Exit.");
            process.exit();
        }
        this.argsInKebab = lodash.kebabCase(this.arguments);

        this.reworkArguments = lodash.camelCase(this.arguments);

        this.sectionName = this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
        //this.directory('my-section',"src/app/");

    },


    /**
     * Function writing. This function copies the basic templates for services.
     */
    writing: function () {


        this.basicTemplate = 'src/app/main-content/' + this.tabRequested + '/';

        this.pathForImport = '../src/' + this.argsInKebab;


        var subTemplate = this.argsInKebab + "-section/" + this.argsInKebab;
        
        //this.copy('tab-content/tab.component.scss', this.basicTemplate+ this.argsInKebab + '-tab.component.scss');

        this.copy('my-section/my-section.component.ts', this.basicTemplate + subTemplate + '-section.component.ts');
        this.copy('my-section/my-section.component.html', this.basicTemplate + subTemplate + '-section.component.html');
        this.copy('my-section/my-section.component.spec.ts', this.basicTemplate + subTemplate + '-section.component.spec.ts');
        this.copy('my-section/my-section.component.scss', this.basicTemplate + subTemplate + '-section.component.scss');

    },


    updateModule: function () {
        //Structure of the cut file:
        //All import statements: import {} from 'path'
        //NgModule tag
        //Ino NgModule we find Declarations tag
        //Rest of the file
        var path = "src/app/main-content/main-content.module.ts",
            file = fileManager.readFileAsString(path),
            splitedFile = file.split("\n@NgModule");

        if (splitedFile.length == 2) {
            // We create the new component import statement


            var importSection = "";
            var declarationSection = "";
            importSection = "\nimport {" + this.sectionName +
                "SectionComponent} from './" + this.tabRequested + "/"+
            this.argsInKebab +
            "-section/" + this.argsInKebab +
            "-section.component';";
            declarationSection = "\n\t\t" + this.sectionName +
                "SectionComponent,";


            //We split the second part of the file according to the tag declaration
            var secondSplitForDeclaration = splitedFile[1].split("declarations: [");

            if (secondSplitForDeclaration.length == 2) {
                //We add the component into the declaration tag
                var declarationComponent = "declarations: [\n\t\t" + this.sectionName + "SectionComponent,";

                //We bring all the pieces together.
                var finalFile = splitedFile[0] + importSection + "\n\n@NgModule" + secondSplitForDeclaration[0] + declarationComponent + secondSplitForDeclaration[1];
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
        var path = "src/app/main-content/" +this.tabRequested +
            "/" + this.tabRequested +
            ".component.html";
        var file = fileManager.readFileAsString(path);
        //var splitedFile = file.split("<nav id=\"routingTab\">");

        var splitedFile = file.split("<!-- Generator Hook for section, do not delete this line -->");
        if (splitedFile.length > 0) {

            var routingNewComponent = "<div class=\"col-lg-4\"> <app-"+
                this.argsInKebab+"-section></app-" +this.argsInKebab+"-section></div>";

            var finalFile = splitedFile[0] + routingNewComponent
                + "\n\t\t" + "<!-- Generator Hook for section, do not delete this line -->" + splitedFile[1];

            fs.writeFile(path, finalFile, function (err) {
                if (err) {
                    return console.log(err);
                }
            });

        }
        else {
            this.log("Update Navigation: Error.\n " +
                "An error has occurred while trying to find the tag: <nav id=\"routingTab\">");
        }
    }


});