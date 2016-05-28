import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

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