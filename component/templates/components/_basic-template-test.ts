/**
 * Test Component <%= nameOfComponent %>
 */
import {Component} from "@angular/core";
@Component({
    selector: 'test-<%= argsInKebab %>',
    template: '<sd-<%= argsInKebab %>></sd-<%= argsInKebab %>>',
})
class Test<%= componentName %>Component {}