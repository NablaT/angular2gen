###Folder pipes

This folder contains all pipes for your angular 2 project.

You can generate through your command prompt a pipe with the following commands:

```
yo angular2gen:pipe Name
```

##### The pipe name will be NamePipe.
##### For instance, you run yo angular2gen:pipe TransformUpperCase, the name of the class will be TransformUpperCasePipe

As you have seen in the folder architecture of the generator, the folder pipes has two folders: one for the sources *src* and another for the tests *test*.
When you run the previous command, it will create two files as follow:
```
- src
         │_ name.pipe.ts : The main file of your pipe
- test
         │_ name.pipe.spec.ts: The test file of your pipe
```
