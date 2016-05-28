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
    describe('App component', () => {


        it('should work',
            inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
                tcb.createAsync(HeaderComponent)
                    .then((rootTC:any) => {
                        let aboutDOMEl = rootTC.debugElement.children[0].nativeElement;

                        expect(getDOM().querySelectorAll(aboutDOMEl, 'h1')[0].textContent).toEqual('<%= projectTitle %>');
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    directives: [HeaderComponent],
    template: '<sd-app></sd-app>'
})
class TestComponent {
}
