/**
 * Component CoreCardComponent
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'card',
    moduleId: module.id,
    templateUrl: './card.component.html',
    styleUrls : ['./card.component.css']
})
export class CardComponent {

    @Input('path') path:string;
    @Input('content') content:string;
    @Input('description') description:string;

}