import {Component} from "@angular/core";
import {CardComponent} from "../core/card/card.component";

@Component({
    selector: 'about',
    moduleId: module.id,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    directives: [CardComponent]
})
export class AboutComponent {
}