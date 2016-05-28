import gulp from 'gulp';
import {
    NPM_DEPENDENCIES,
    JS_PROD_LIBS_BUNDLE,
    JS_PROD_DIR
} from '../../gulp.conf';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

/**
 * Returns the npm dependencies to be injected
 */
function getNpmDependencies () {
    return NPM_DEPENDENCIES.map(dep => dep.src);
}

gulp.task('bundles.libs.prod', () => {
    return gulp.src(getNpmDependencies())
               .pipe(plugins.uglify({
                   mangle: false
               }))
               .pipe(plugins.concat(JS_PROD_LIBS_BUNDLE))
               .pipe(gulp.dest(JS_PROD_DIR));
});