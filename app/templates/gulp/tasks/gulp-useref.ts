import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {PROD_PATH, INDEX} from '../gulp.conf';

const plugins = <any>gulpLoadPlugins();

/**
 * This function aggregates scripts in file.
 *
 * @param {string} destinationDirectory - The destination directory.
 * @param {string} destinationFile - The file in which we want to use the plugin.
 */
function useref(destinationDirectory:string, destinationFile:string) {
    return gulp.src(destinationDirectory + '/' + destinationFile)
        .pipe(plugins.useref())
        .pipe(gulp.dest(destinationDirectory));
}

/**
 * This function aggregates scripts for production in the INDEX file.
 */
function userefProd() {
    return useref(PROD_PATH, INDEX);
}

///////////////////// Useref Tasks /////////////////////

gulp.task('useref:prod', userefProd);