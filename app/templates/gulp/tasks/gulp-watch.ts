import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as runSequence from 'run-sequence';
import * as browserSync from 'browser-sync';
import {INDEX, ALL_FILES, TYPESCRIPT_FILES, SASS_FILES} from '../gulp.conf';

const plugins = <any>gulpLoadPlugins();

let bs = browserSync.get('Server');

/**
 * This function watches the files in the filesArray and executes the tasks in the tasksArray.
 *
 * @param {Array} filesArray - The files to watch.
 * @param {Array} tasksArray - The tasks to execute.
 */
function watch(filesArray:string[], tasksArray:string[]) {
    gulp.watch(filesArray, tasksArray)
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
}

/**
 * This function watches typescript files.
 */
function scriptsWatch() {
    let scripts = [TYPESCRIPT_FILES];
    let tasks = ['ts:dev'];
    watch(scripts, tasks);
}

/**
 * This function watches sass files.
 */
function sassWatch() {
    let sass = [SASS_FILES];
    let tasks = ['sass:dev'];
    watch(sass, tasks);
}

/**
 * This function watches only the INDEX file because we need to inject dependencies after copying.
 */
function indexWatch() {
    gulp.watch('src/' + INDEX, function (event) {
        console.log('File ' + event.path + ' was ' + event.type);
        runSequence('copy:index', 'inject:dev');
    });
}

/**
 * This function watches all files except
 * <ul>
 *     <li>TYPESCRIPT_FILES</li>
 *     <li>SASS_FILES</li>
 *     <li>INDEX</li>
 * </ul>
 */
function othersWatch() {
    const EXCLUDED_FILES = [
        '!' + TYPESCRIPT_FILES,
        '!' + SASS_FILES,
        '!src/' + INDEX
    ];

    let files = [ALL_FILES].concat(EXCLUDED_FILES);
    let tasks = ['copy:dev'];
    watch(files, tasks);
}

///////////////////// Watch Tasks /////////////////////

gulp.task('watch:scripts', scriptsWatch);
gulp.task('watch:sass', sassWatch);
gulp.task('watch:index', indexWatch);
gulp.task('watch:others', othersWatch);
gulp.task('watch', callback =>
    runSequence(['watch:scripts', 'watch:sass', 'watch:index', 'watch:others'], callback)
);