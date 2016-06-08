import {TestComponentBuilder} from "@angular/compiler/testing";
import {Component} from "@angular/core";
import {
    describe,
    expect,
    it,
    inject
} from "@angular/core/testing";
import {getDOM} from "@angular/platform-browser/src/dom/dom_adapter";
import {HeaderComponent} from "./header.component";

export function main() {

}

@Component({
    selector: 'test-cmp',
    directives: [HeaderComponent],
    template: '<sd-header></sd-header>'
})
class TestComponent {
}
