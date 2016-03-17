import * as browserSync from 'browser-sync';

let bs = null;

export function getBrowserSync (){
    if (bs === null){
        return bs = browserSync.create('Server');
    }
    return browserSync.get('Server');
}