# angular2gen
# Build your Angular2 app from a simple basis 

Do you want to learn Angular 2 ? Do you want to build an Angular 2 from a simple basis ? Do you need an assistance in your development ? Angular2gen has been made for you!<br/>

Angular 2 is a new framework totally different from AngularJS 1 and other JavaScript frameworks. Everybody starts Angular2 from 0 (almost :P). In consequence, two important axes appear as the key to succeed your first Angular2 development: simplicity and assistance.   

That the reason why we built angular2gen, a Yeoman generator for Angular 2, with two goals in mind:
- Be able to create a simple and intuitive project structure according to the tools you would like to use.
- Be able to generate everything you need for your development: components, directives, services, global styles.

## Generate an Angular 2 project

### Installation and execution 

1) Install NodeJS: Use the [NodeJS Installer](https://nodejs.org/en/download/)

2) Install Yeoman: Open shell and run: 

```
npm install -g yo
```

3) Run angular2gen: 

```
yo angular2gen
```

### Tools installation

Just after running the previous command, angular2gen will ask you the name of your project and which tools would you like to use. 
For tools, it can install:
- Sass 
- Bootstrap (v4.0.0-alpha.2) or Foundation 
- Font Awesome. 


###Folder architecture

When your project has been generated, you will find the following structure 
```
- package.json
- src
 │_ main.ts
 │_ routeur.ts
 │_ index.html
 - components
    - app
         │_ app.component.html
         │_ app.component.scss or .css (depends on Sass installation)
         │_ app.component.spec.ts
         │_ app.component.ts
    │_ README.md
 - shared
    - services
       - src
         │_ README.md
       - test
         │_ README.md
    - directives
       - src
         │_ README.md
       - test
         │_ README.md
    - styles
         │_ README.md
 - assets
- gulp
- manual_typings
- typings
```

## Run application

When the project has been generated, you can run the application with the following command:
```
gulp serve
```

## Generate components

To generate a component, you just have to run the following command in your shell:
```
yo angular2gen:component NameOfYourComponent
```

The command will create the folder name-of-your-component in the folder components with the following files: 
```
- name-of-your-component
    │_ name-of-your-component.component.html: The html file of the component
    │_ name-of-your-component.component.scss or css (depends on Sass installation): The css file of the component
    │_ name-of-your-component.component.spec.ts: The test file of the component 
    │_ name-of-your-component.component.ts: The component 
```
## Generate directives

To generate a directive, run the following command in your shell:
```
yo angular2gen:directive NameOfYourDirective
```

As you have seen in the folder architecture of the generator, the folder directives has two folder: one for the sources *src* and another for the tests *test*   
```
- src
         │_ name-of-your-directive.directive.ts : The main file of your directive
- test
         │_ name-of-your-directive.directive.spec.ts: The test file of your directive
```

## Generate services

To generate a service, run the following command in your shell:
```
yo angular2gen:service NameOfYourService
```

As for directives, services follow the same architecture with two folders: one for the sources *src* and another for the tests *test* 
```
- src
         │_ name-of-your-service.service.ts : The main file of your service
- test 
         │_ name-of-your-service.service.spec.ts: The test file of your service
```


###Contact

Do not hesitate to contact us if you have questions, needs, requests ... You can do it by GitHub or directly by email:
- <a href="mailto:remi.pourtier@gmail.com"> Rémi Pourtier </a>
- <a href="mailto:guillaume.rahbari@gmail.com"> Guillaume Rahbari </a>
