# angular2gen - Build your Angular2 app from a simple basis 

Do you want to learn Angular 2 ? Do you want to build an Angular 2 from a simple basis ? Do you need an assistance in your development ? Angular2gen has been made for you!<br/>

Angular 2 is a new framework totally different from AngularJS 1 and other JavaScript frameworks. Everybody starts Angular2 from 0 (almost :P). In consequence, two important axes appear as the key to succeed your first Angular2 development: simplicity and assistance.   

That the reason why we built angular2gen, a Yeoman generator for Angular 2, with two goals in mind:
- Be able to create a simple and intuitive project structure according to the tools you would like to use.
- Be able to generate everything you need for your development: components, directives, services, global styles.

## Generate an Angular 2 project

Installation

1) Install NodeJS: Use the [NodeJS Installer](https://nodejs.org/en/download/)

2) Install Yeoman: Open shell and run: npm install -g yo

2)

Folder architecture

_ package.json <br/>
_ app<br/>
 - index.js<br/>
 - main.ts<br/>
 - routeur.ts<br/>
 - index.html<br/>
 - shared<br/>
    │_ services<br/>
    │_ directives<br/>
    │_ styles<br/>
 - components<br/>
    │_ app<br/>
 - assets

_ routeur<br/>
 - index.js<br/>

## Generate components

To generate a component, you just have to run the following command in your shell:

yo angular2gen:component NameOfYourComponent



## Generate directives

To generate a directive, run the following command in your shell:

yo angular2gen:directive NameOfYourDirective




## Generate services

To generate a service, run the following command in your shell:

yo angular2gen:service NameOfYourService
