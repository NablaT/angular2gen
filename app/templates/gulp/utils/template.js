import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

/**
 * This function allows to do templating in typescript.
 *
 * @param {String} files - The typescript files.
 * @param {String} destinationDirectory - The destination directory.
 * @param {String} mode - The mode in which we are ('dev' or 'prod').
 */
export function template (files, destinationDirectory, mode) {
    return gulp.src(files)
               .pipe(plugins.template({ENV: mode}))
               .pipe(gulp.dest(destinationDirectory));
}