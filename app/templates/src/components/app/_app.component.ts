import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from '../header/header.component';
import {AboutComponent} from '../about/about.component';
import {HomeComponent} from '../home/home.component';

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent
    ]
})
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/about', name: 'About', component: AboutComponent}
])
export class AppComponent {
}