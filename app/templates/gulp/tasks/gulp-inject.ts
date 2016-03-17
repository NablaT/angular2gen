import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

const SHIMS_DEPENDENCIES = [
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    'node_modules/angular2/bundles/angular2-polyfills.js'
];

const LIBS_DEPENDENCIES = [
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js'
];

const TARGET = 'dist/index.html';

/**
 * This function injects :
 * <ul>
 *     <li>shims</li>
 *     <li>libs</li>
 * </ul>
 * in the TARGET file.
 * @returns {NodeJS.ReadWriteStream|any}
 */
function inject() {
    return gulp.src(TARGET)
        .pipe(plugins.inject(gulp.src(SHIMS_DEPENDENCIES, {read: false}), {name: 'shims'}))
        .pipe(plugins.inject(gulp.src(LIBS_DEPENDENCIES, {read: false}), {name: 'libs'}))
        .pipe(gulp.dest('./dist'));
}

///////////////////// Inject Tasks /////////////////////

gulp.task('inject', inject);