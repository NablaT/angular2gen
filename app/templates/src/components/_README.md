###Folder components

This folder contains all components for your angular 2 project.

You can generate through your command prompt a component with the following commands:
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
```

