import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= argsInKebab %>Routing } from './<%= argsInKebab %>.routing';
import { <%= componentName %>Component } from './<%= argsInKebab %>.component';

@NgModule({
    imports: [
        CommonModule,
        <%= argsInKebab %>Routing
    ],
    declarations: [<%= componentName %>Component],
    exports: [<%= componentName %>Component]
})

export class <%= componentName %>Module { }