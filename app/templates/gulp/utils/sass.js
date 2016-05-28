import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {getBrowserSync} from './browsersync';
import {SRC_DIR} from '../gulp.conf';

const plugins = gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * This function compiles sass files into the destinationDirectory directory.
 *
 * @param {String} files - Files to match.
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} enableProdMode - A boolean to define if we are in production or not.
 */
export function sass (files, destinationDirectory, enableProdMode = false) {
    return gulp.src(files, {base: SRC_DIR})
               .pipe(plugins.if(!enableProdMode, plugins.sourcemaps.init()))
               .pipe(plugins.sass())
               .pipe(plugins.if(!enableProdMode, plugins.sourcemaps.write('./')))
               .pipe(gulp.dest(destinationDirectory))
               .pipe(bs.stream());
}