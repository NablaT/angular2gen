import gulp from 'gulp';
import path from 'path';
import gulpLoadPlugins from 'gulp-load-plugins';
import {getBrowserSync} from './browsersync';
import {TEMPLATE_DIR} from '../gulp.conf';

const plugins = gulpLoadPlugins();

let _tsProject = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});

let bs = getBrowserSync();

const typings = ['typings/browser.d.ts'];

const INLINE_OPTIONS = {
    base            : TEMPLATE_DIR,
    useRelativePaths: true,
    removeLineBreaks: true
};

/**
 * This function transpiles typescript files.
 *
 * @param {Array} filesArray - The files to be transpiled.
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} enableProdMode - A boolean to define if we are in production or not.
 */
export function typescript (filesArray, destinationDirectory, enableProdMode = false) {
    var result = gulp.src(typings.concat(filesArray))
                     .pipe(plugins.if(!enableProdMode, plugins.sourcemaps.init()))
                     .pipe(plugins.if(enableProdMode, plugins.inlineNg2Template(INLINE_OPTIONS)))
                     .pipe(plugins.typescript(_tsProject));

    return result.js
                 .pipe(plugins.if(!enableProdMode, plugins.sourcemaps.write('./')))
                 .pipe(gulp.dest(destinationDirectory))
                 .pipe(bs.stream({match: path.join('**', '*.js')}));
}