# angular2gen
# Build your Angular2 app from a simple basis 

Do you want to learn Angular 2 ? Do you want to build an Angular 2 application from a simple basis ? Do you need an assistance in your development ? Angular2gen has been made for you!<br/>

Angular 2 is a new framework totally different from AngularJS 1 and other JavaScript frameworks. Everybody starts Angular2 from 0 (almost :P). In consequence, two important axes appear as the key to succeed your first Angular2 development: simplicity and assistance.   

That the reason why we built angular2gen, a Yeoman generator for Angular 2, with two goals in mind:
- Be able to create a simple and intuitive project structure according to the tools you would like to use.
- Be able to generate everything you need for your development: components, directives, services, global styles.

We developed also several Gulp task for launching the application (Sass and typescript compilation), live reload etc...

## Generate an Angular 2 project

### Installation and execution 

1) Install NodeJS: Use the [NodeJS Installer](https://nodejs.org/en/download/)

2) Install Yeoman: Open shell and run: 

```
npm install -g yo
```

3) Install angular2gen 

```
npm install -g yo generator-angular2gen
```

4) Run angular2gen: 

```
yo angular2gen
```

### Tools installation

Just after running the previous command, angular2gen will ask you the name of your project and which tools would you like to use. 
For tools, it can install:
- Bootstrap (v4.0.0-alpha.2) or Foundation 
- Font Awesome. 

```
Your project name: NameOfYourfirstApp
Would you like to use Bootstrap ? (Y/N) N
Would you like to use Foundation ? (Y/N) Y
Would you like to use FontAwesome ? (Y/N) Y
```

If you think tools are missing, do not hesitate to contact us and tell us which tools should be interesting to use in an Angular 2 app!  

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
         - +about
         - +home
         - core
         │_ app.component.html
         │_ app.component.scss 
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
    - pipes
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


#### Why do certain folders have a "+" as a prefix?
In order to specify these folders as lazy loaded folders. Lazy loading is widespread practice which consists in loading only the files you need in your page. The "+" annotation allows you to specify which of your component should be lazy loaded. 
For more information, you can check the [tutorial](http://blog.mgechev.com/2015/09/30/lazy-loading-components-routes-services-router-angular-2/) wrote by Minko Gechev on Lazy Loading. You can also check the [Angular 2 style guide](https://angular.io/styleguide) for more information on angular 2 guidelines.


#### Folder core: Angular2gen library, what is it? 
In order to assist you in angular 2 learning and in your development, we are developing a set of common component. The folder core will contain all the common component we are developing: login, logout, headers, footers, cards etc... 

If you would like to participate in this library development, do not hesitate to contact us (cf. contact us part bellow) or open a pull request. 

Our main goal is to create a huge set of components with tones of different design, behavior etc...


## Run application

When the project has been generated, you can run the application with the following command:
```
gulp serve
```

### Tests
To run tests and work on TDD mode, you can run the following command right just after the one above:
```
gulp karma:dev
```

## Generate components

To generate a component, you just have to run the following command in your shell:
```
yo angular2gen:component Name
```

##### The component name will be NameComponent. 
##### For instance, you run yo angular2gen:component Menu, the name of the class will be MenuComponent

We made this choice for two reasons:
- Avoid conflict between names of your components, services and directives
- Better maintanability and modifiability. A quick eye on the file and you know variables role.

The command will create the folder name-of-your-component in the folder components with the following files: 
```
- name-of-your-component
    │_ name-of-your-component.component.html: The html file of the component
    │_ name-of-your-component.component.scss or css (depends on Sass installation): The css file of the component
    │_ name-of-your-component.component.spec.ts: The test file of the component 
    │_ name-of-your-component.component.ts: The component 
    │_ index.ts: Barel of your component
```
####What is a barel ? 

A barel is a file that imports, aggregates, and re-exports items. We use them for several reasons:
- A barrel aggregates many imports into a single import.
- A barrel reduces the number of imports a file may need.
- A barrel provides a consistent pattern to import everything exported in the barrel from a folder.
- This is consistent with a pattern from Node, which imports the index.js|ts file from a folder.
- A barrel shortens import statements.


####Specify a destination folder 
You can also specify a destination folder when you generate your component. For instance, if you would like to create a new component into the folder +about, you just have to run the following command: 

```
yo angular2gen:component +about/Name
```

## Generate directives

To generate a directive, run the following command in your shell:
```
yo angular2gen:directive Name
```
##### The directive name will be NameDirective.
##### For instance, you run yo angular2gen:directive Draggable, the name of the class will be DraggableDirective

As you have seen in the folder architecture of the generator, the folder directives has two folders: one for the sources *src* and another for the tests *test*   
```
- src
         │_ draggable.directive.ts : The main file of your directive
- test
         │_ draggable.directive.spec.ts: The test file of your directive
```

As for components, you can specify the path where you would like to create the directive. 
```
yo angular2gen:pipe behaviour/Draggable
```
The previous command will create the following structure:
```
- src
     -behaviour
         │_ draggable.directive.ts: The main file of your directive
- test
     -behaviour
         │_cdraggable.spec.ts: The test file of your directive
```

## Generate services

To generate a service, run the following command in your shell:
```
yo angular2gen:service Name
```

##### The service name will be NameService. 
##### For instance, you run yo angular2gen:service CallDataBase, the name of the class will be CallDataBaseService

As for directives, services follow the same architecture with two folders: one for the sources *src* and another for the tests *test* 
```
- src
         │_ call-data-base.service.ts : The main file of your service
- test 
         │_ call-data-base.service.spec.ts: The test file of your service
```

As for components, you can specify the path where you would like to create the service. 
```
yo angular2gen:pipe userService/CallDataBase
```
The previous command will create the following structure:
```
- src
     -userService
         │_ call-data-base.service.ts: The main file of your service
- test
     -userService
         │_call-data-base.service.spec.ts: The test file of your service
```

## Generate pipes

To generate a pipe, run the following command in your shell:
```
yo angular2gen:pipe Name
```

##### The pipe name will be NamePipe. 
##### For instance, you run yo angular2gen:pipe TransformUpperCase, the name of the class will be TransformUpperCasePipe
The previous command will generate the following files:
```
- src
         │_ transform-upper-case.pipe.ts : The main file of your pipe
- test
         │_ transform-upper-case.pipe.spec.ts: The test file of your pipe
```

As for components, you can specify the path where you would like to create the pipe. 
```
yo angular2gen:pipe textTransformation/TransformUpperCase
```
The previous command will create the following structure:
```
- src
     -textTransformation
         │_ transform-upper-case.pipe.ts : The main file of your pipe
- test
     -textTransformation
         │_ transform-upper-case.pipe.spec.ts: The test file of your pipe
```

###Missing Functionalities 

We haven't finished the generator yet. We have several missing functionalities: 
- Update the initial application in the generator to an app with a menu and several elements to have a real home page 
- Give the possibility to user to choose its first application: blank project or a first application
- Develop new gulp tasks for testing and application deployement.

###Contact

Do not hesitate to contact us if you have questions, needs, requests ... You can do it by GitHub, directly by email or by Linkedin:
- Rémi Pourtier: <a href="mailto:remi.pourtier@gmail.com"> Mail </a> | <a href="https://www.linkedin.com/in/r%C3%A9mi-pourtier-91a93782?authType=name&authToken=tNqn&trk=prof-sb-browse_map-name"> Linkedin</a>
- Guillaume Rahbari: <a href="mailto:guillaume.rahbari@gmail.com"> Mail </a> |  <a href="https://www.linkedin.com/in/guillaume-rahbari-948a25a9?trk=endrs-viewall-profile"> Linkedin</a>
