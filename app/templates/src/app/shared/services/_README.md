###Folder services

This folder contains all services for your angular 2 project.

You can generate through your command prompt a service with the following commands:

```
yo angular2gen:service MyService
```

##### The service name will be MyServiceService.
##### For instance, you run yo angular2gen:service CallDataBase, the name of the class will be CallDataBaseService

As you have seen in the folder architecture of the generator, the folder services has two folders: one for the sources *src* and another for the tests *test*.
When you run the previous command, it will create two files as follow:
```
- src
         │_ my-service.service.ts : The main file of your service
- test
         │_ my-service.service.spec.ts: The test file of your service
```
