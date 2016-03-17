import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {getBrowserSync} from '../browsersync';

const plugins = <any>gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * This function compiles scss files into the destDirectory.
 * @param {String} destDirectory - The destination directory.
 */
function sassFn(destDirectory) {
    return gulp.src('**/*.scss', {cwd: 'src', base : 'src'})
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(destDirectory))
        .pipe(bs.stream());
}

/**
 * This function compiles scss files into the dist directory.
 */
function sassDist() {
    return sassFn('dist/');
}

///////////////////// Sass Tasks /////////////////////

gulp.task('sass:dist', sassDist);