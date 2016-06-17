import {Pipe, PipeTransform} from '@angular/core';
/**
 * <%= nameOfPipe %>Pipe
 * A pipe takes in data as input and transforms it to a desired output.
 */
@Pipe({name: '<%= nameOfPipe %>Pipe'})
export class <%= nameOfPipe %>Pipe implements PipeTransform {
    /**
     * Method transform.
     * This method comes from interface PipeTransform. In each pipe, we have to
     * implement it.
     */
    transform(){
        //Code your transformation here.
    }
}
