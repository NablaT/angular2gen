import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= nameOfComponent %>Component } from './<%= argsInKebab %>.component';

@NgModule({
    imports: [CommonModule],
    declarations: [<%= nameOfComponent %>Component],
    exports: [<%= nameOfComponent %>Component]
})

export class <%= nameOfComponent %>Module { }