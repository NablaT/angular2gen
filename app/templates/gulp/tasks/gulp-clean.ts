import * as gulp from 'gulp';
import * as del from 'del';
import * as runSequence from 'run-sequence';
import {DEV_PATH, PROD_PATH} from '../gulp.conf';

/**
 * This function deletes:
 * <ul>
 *   <li>Everything in the directory</li>
 *   <li>The directory itself</li>
 * </ul>
 *
 * @param {string} directory - The directory to delete.
 */
function clean(directory:string) {
    return del(['{' + directory + ',' + directory + '/**/*}']);
}

/**
 * This function cleans files into the DEV_PATH directory.
 */
function cleanDev() {
    return clean(DEV_PATH);
}

/**
 * This function cleans files into the PROD_PATH directory.
 */
function cleanProd() {
    return clean(PROD_PATH);
}

///////////////////// Clean Tasks /////////////////////

gulp.task('clean:dev', cleanDev);
gulp.task('clean:prod', cleanProd);
gulp.task('clean:all', callback => {
    runSequence(['clean:dev', 'clean:prod'], callback);
});