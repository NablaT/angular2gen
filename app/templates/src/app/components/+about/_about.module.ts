import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CardComponent } from "../core/card/card.component";

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent, CardComponent],
    exports: [AboutComponent]
})

export class AboutModule { }