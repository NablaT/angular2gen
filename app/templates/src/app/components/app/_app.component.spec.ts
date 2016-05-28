import {TestComponentBuilder} from "@angular/compiler/testing";
import {Component} from "@angular/core";
import {
    describe,
    expect,
    it,
    inject
} from "@angular/core/testing";
import {getDOM} from "@angular/platform-browser/src/dom/dom_adapter";
import {AppComponent} from "./app.component";

export function main() {
    describe('App component', () => {


        it('should work',
            inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
                tcb.createAsync(AppComponent)
                    .then((rootTC:any) => {
                        let aboutDOMEl = rootTC.debugElement.children[0].nativeElement;

                        expect(getDOM().querySelectorAll(aboutDOMEl, 'h1')[0].textContent).toEqual('My First Angular 2 App');
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    directives: [AppComponent],
    template: '<sd-app></sd-app>'
})
class TestComponent {
}
