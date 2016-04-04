import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {getBrowserSync} from '../browsersync';
import {
    DEV_PATH,
    PROD_PATH,
    ALL_FILES,
    TYPESCRIPT_FILES,
    SASS_FILES,
    INDEX
} from '../gulp.conf';

const plugins = <any>gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * @constant The array of excludes files.
 */
const EXCLUDED_FILES:string[] = [
    '!' + TYPESCRIPT_FILES,
    '!' + SASS_FILES
];

/**
 * This function copies ALL_FILES excepts:
 * <ul>
 *   <li>Typescript files</li>
 *   <li>Sass files</li>
 * </ul>
 * into the destinationDirectory directory.
 *
 * @param {string} files - Files to copy.
 * @param {string} destinationDirectory - The destination directory.
 */
function copyDist(files:string, destinationDirectory:string) {

    const FILES:string[] = [files].concat(EXCLUDED_FILES);

    return gulp.src(FILES, {base: 'src'})
        .pipe(plugins.changed(destinationDirectory))
        .pipe(gulp.dest(destinationDirectory))
        .pipe(plugins.if(files !== ('src/' + INDEX), bs.stream()));
}

/**
 * This function copies only the INDEX file.
 */
function copyIndex() {
    return copyDist('src/' + INDEX, DEV_PATH);
}

/**
 * This function copies ALL_FILES into the DEV_PATH directory.
 */
function copyDev() {
    return copyDist(ALL_FILES, DEV_PATH);
}

/**
 * This function copies ALL_FILES into the PROD_PATH directory.
 */
function copyProd() {
    return copyDist(ALL_FILES, PROD_PATH);
}

///////////////////// Copy Tasks /////////////////////

gulp.task('copy:dev', copyDev);
gulp.task('copy:prod', copyProd);
gulp.task('copy:index', copyIndex);