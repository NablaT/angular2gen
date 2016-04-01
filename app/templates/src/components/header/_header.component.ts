import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'header',
    moduleId: module.id,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class HeaderComponent {
}