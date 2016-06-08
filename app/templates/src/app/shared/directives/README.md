###Folder directives

This folder contains all directives for your angular 2 project.

You can generate through your command prompt a directive with the following commands:

```
yo angular2gen:directive MyDirective
```

##### The directive name will be MyDirectiveDirective.
##### For instance, you run yo angular2gen:directive Draggable, the name of the class will be DraggableDirective

As you have seen in the folder architecture of the generator, the folder directives has two folders: one for the sources *src* and another for the tests *test*.
When you run the previous command, it will create two files as follow:
```
- src
         │_ my-directive.directive.ts : The main file of your directive
- test
         │_ my-directive.directive.spec.ts: The test file of your directive
```
