import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {DEV_PATH, PROD_PATH, INDEX, SHIMS_DEPENDENCIES, LIBS_DEPENDENCIES, SHIMS, LIBS} from '../gulp.conf';
import {getBrowserSync} from '../browsersync';

const plugins = <any>gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * This function injects :
 * <ul>
 *     <li>shims</li>
 *     <li>libs</li>
 * </ul>
 * in the INDEX file.
 *
 * @param {string} destinationDirectory - The destination directory.
 */
function inject(destinationDirectory:string) {
    return gulp.src(INDEX, {cwd: destinationDirectory})
        .pipe(plugins.inject(gulp.src(SHIMS_DEPENDENCIES, {read: false}), {name: SHIMS}))
        .pipe(plugins.inject(gulp.src(LIBS_DEPENDENCIES, {read: false}), {name: LIBS}))
        .pipe(gulp.dest(destinationDirectory))
        .pipe(bs.stream());
}

/**
 * This function injects (for development mode) :
 * <ul>
 *     <li>shims</li>
 *     <li>libs</li>
 * </ul>
 * in the INDEX file.
 */
function injectDev() {
    return inject(DEV_PATH);
}

/**
 * This function injects (for production mode) :
 * <ul>
 *     <li>shims</li>
 *     <li>libs</li>
 * </ul>
 * in the INDEX file.
 */
function injectProd() {
    return inject(PROD_PATH);
}

///////////////////// Inject Tasks /////////////////////

gulp.task('inject:dev', injectDev);
gulp.task('inject:prod', injectProd);