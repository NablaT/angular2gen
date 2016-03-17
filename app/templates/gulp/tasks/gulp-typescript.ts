import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {getBrowserSync} from '../browsersync';

const plugins = <any>gulpLoadPlugins();

let _tsProject = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});

let bs = getBrowserSync();

let typings = ['manual-typings/manual-typings.d.ts', 'typings/browser.d.ts'];

/**
 * This function transpiles typescript files.
 * @param {Array} filesArray - The files to be transpiled.
 * @param {String} destDirectory - The destination directory.
 */
function compile(filesArray, destDirectory) {
    return gulp.src(filesArray)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.typescript(_tsProject))
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(destDirectory))
        .pipe(bs.stream());
}

/**
 * This function transpiles typescript files into the dist directory.
 */
function dist() {
    return compile(typings.concat(['src/**/*.ts']), './dist/');
}

///////////////////// Typescript Tasks /////////////////////

gulp.task('ts:dist', dist);