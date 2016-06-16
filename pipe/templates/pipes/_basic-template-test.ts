/**
 * Test pipe <%= nameOfPipe %>Pipe
 */
import { <%= nameOfPipe %>Pipe } from '../src/<%=argsInKebab%>.pipe';
describe('<%= nameOfPipe %>Pipe', () => {
    let pipe: <%= nameOfPipe %>Pipe;

    /**
     * Pipe Initialisation before running tests
     */
    beforeEach(() => {
        pipe = new <%= nameOfPipe %>Pipe();
    });

    /**
     * Right the test bellow by testing transform method outputs
     */
    it('', () => {
        //Structure like this: expect(pipe.transform("input")).toEqual("output");
    });

});