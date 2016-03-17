/**
 * Test Component <%= nameOfComponent %>
 */
import {<%= nameOfComponent %>} from "./<%= argsInKebab %>.component";
import {Component} from "angular2/core";
@Component({
    selector: 'test-cmp',
    template: '<sd-<%= argsInKebab %>></sd-<%= argsInKebab %>>',
    directives: []
})
class Test<%= nameOfComponent %> {}