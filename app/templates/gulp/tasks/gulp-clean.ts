import * as gulp from 'gulp';
import * as del from 'del';

/**
 * This function cleans files in dist directory.
 */
function clean() {
    return del(['dist/**/*']);
}

///////////////////// Clean Tasks /////////////////////

gulp.task('clean', clean);