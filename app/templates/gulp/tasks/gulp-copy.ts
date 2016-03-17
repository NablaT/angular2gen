import * as gulp from 'gulp';

/**
 * This function copies files into the dist directory.
 */
function copyDist() {

    return gulp.src(['**/*', '!**/*.ts', '!**/*.scss'], {cwd: 'src'})
        .pipe(gulp.dest('dist/'));
}

///////////////////// Copy Tasks /////////////////////

gulp.task('copy:dist', copyDist);