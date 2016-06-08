import {TestComponentBuilder} from "@angular/compiler/testing";
import {Component} from "@angular/core";
import {
    describe,
    expect,
    it,
    inject
} from "@angular/core/testing";
import {getDOM} from "@angular/platform-browser/src/dom/dom_adapter";
import {HomeComponent} from "./home.component";

export function main() {
    describe('Home component', () => {


        it('should work',
            inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
                tcb.createAsync(HomeComponent)
                    .then((rootTC:any) => {
                        let aboutDOMEl = rootTC.debugElement.children[0].nativeElement;

                        expect(getDOM().querySelectorAll(aboutDOMEl, 'h1')[0].textContent).toEqual("Hey, I'm Home !");
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    directives: [HomeComponent],
    template: '<sd-home></sd-home>'
})
class TestComponent {
}
