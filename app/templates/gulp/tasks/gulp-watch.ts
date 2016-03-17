import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as runSequence from 'run-sequence';
import * as browserSync from 'browser-sync';

const plugins = <any>gulpLoadPlugins();

let bs = browserSync.get('Server');

/**
 * This function watches the files in the filesArray and executes the tasks in the tasksArray.
 * @param {Array} filesArray - The files to watch.
 * @param {Array} tasksArray - The tasks to execute.
 */
function watch(filesArray, tasksArray) {
    gulp.watch(filesArray, tasksArray)
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
}

/**
 * This function watches typescript files.
 */
function scriptsWatch() {
    let scripts = ['src/**/*.ts'];
    let tasks = ['ts:dist'];
    watch(scripts, tasks);
}

/**
 * This function watches sass files.
 */
function sassWatch() {
    let sass = ['src/**/*.scss'];
    let tasks = ['sass:dist'];
    watch(sass, tasks);
}

/**
 * This function watches only the index.html because we need to inject dependencies after copying.
 */
function indexWatch (){
    watch ('src/index.html', ['inject']);
}

/**
 * This function watches all files except typescript and sass files and copies only files changed.
 */
function othersWatch() {
    let files = ['src/**/*', '!src/**/*.ts', '!src/**/*.scss', '!src/index.html'];
    gulp.watch(files, (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', copying it in dist and dist_tests folders');
        gulp.src(event.path, {base : 'src'})
            .pipe(plugins.changed('dist/'))
            .pipe(gulp.dest('dist/'));
        bs.reload(event.path);
    })
}

///////////////////// Watch Tasks /////////////////////

gulp.task('watch:scripts', scriptsWatch);
gulp.task('watch:sass', sassWatch);
gulp.task('watch:index', indexWatch);
gulp.task('watch:others', othersWatch);
gulp.task('watch', callback =>
    runSequence(['watch:scripts', 'watch:sass', 'watch:index', 'watch:others'], callback)
);