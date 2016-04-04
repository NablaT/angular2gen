import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {DEV_PATH, PROD_PATH, TYPESCRIPT_FILES, SPEC_FILES} from '../gulp.conf';
import {getBrowserSync} from '../browsersync';

const plugins = <any>gulpLoadPlugins();

let _tsProject = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});

let bs = getBrowserSync();

let typings = ['manual-typings/manual-typings.d.ts', 'typings/browser.d.ts'];

/**
 * This function transpiles typescript files.
 *
 * @param {Array} filesArray - The files to be transpiled.
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} wantSourceMap - A boolean to define if we want source map in the destinationDirectory directory or not.
 */
function compile(filesArray:string[], destinationDirectory:string, wantSourceMap:boolean = false) {
    return gulp.src(filesArray, {base: 'src'})
        .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.init()))
        .pipe(plugins.typescript(_tsProject))
        .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.write('./')))
        .pipe(gulp.dest(destinationDirectory))
        .pipe(bs.stream({match: "**/*.js"}));
}

/**
 * This function transpiles TYPESCRIPT_FILES into the DEV_PATH directory.
 */
function tsDev() {
    return compile(typings.concat([TYPESCRIPT_FILES]), DEV_PATH, true);
}

/**
 * This function transpiles TYPESCRIPT_FILES into the PROD_PATH directory.
 */
function tsProd() {
    const FILES = [TYPESCRIPT_FILES].concat(['!' + SPEC_FILES]);

    return compile(typings.concat(FILES), PROD_PATH);
}

///////////////////// Typescript Tasks /////////////////////

gulp.task('ts:dev', tsDev);
gulp.task('ts:prod', tsProd);