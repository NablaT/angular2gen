import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {DEV_PATH, PROD_PATH, SASS_FILES} from '../gulp.conf';
import {getBrowserSync} from '../browsersync';

const plugins = <any>gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * This function compiles SASS_FILES files into the destinationDirectory directory.
 *
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} wantSourceMap - A boolean to define if we want source map in the destinationDirectory directory or not.
 */
function sassFn(destinationDirectory:string, wantSourceMap:boolean = false) {
    return gulp.src(SASS_FILES, {base: 'src'})
        .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.init()))
        .pipe(plugins.sass({includePaths: [destinationDirectory]}))
        .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.write('./')))
        .pipe(gulp.dest(destinationDirectory))
        .pipe(bs.stream());
}

/**
 * This function compiles SASS_FILES into the DEV_PATH directory.
 */
function sassDev() {
    return sassFn(DEV_PATH, true);
}

/**
 * This function compiles SASS_FILES into the PROD_PATH directory.
 */
function sassProd() {
    return sassFn(PROD_PATH);
}

///////////////////// Sass Tasks /////////////////////

gulp.task('sass:dev', sassDev);
gulp.task('sass:prod', sassProd);