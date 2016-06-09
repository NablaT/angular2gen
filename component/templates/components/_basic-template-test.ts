/**
 * Test Component <%= nameOfComponent %>
 */
import {<%= nameOfComponent %>Component} from "./<%= argsInKebab %>.component";
import {Component} from "@angular/core";
@Component({
    selector: 'test-<%= argsInKebab %>',
    template: '<sd-<%= argsInKebab %>></sd-<%= argsInKebab %>>',
    directives: []
})
class Test<%= componentName %>Component {}