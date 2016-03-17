/**
 * Directive <%= nameOfDirective %>Directive
 */
import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[<%=reworkArguments%>]'
})
export class <%= nameOfDirective %>Directive {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}