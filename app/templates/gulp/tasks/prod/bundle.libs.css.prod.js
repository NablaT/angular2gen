import gulp from 'gulp';
import {
    CSS_NPM_DEPENDENCIES,
    CSS_PROD_LIBS_BUNDLE,
    CSS_PROD_DIR
} from '../../gulp.conf';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

/**
 * Returns the npm dependencies to be injected
 */
function getNpmDependencies () {
    return CSS_NPM_DEPENDENCIES.map(dep => dep.src);
}

gulp.task('bundle:libs:css:prod', () => {
    return gulp.src(getNpmDependencies())
               .pipe(plugins.concatCss(CSS_PROD_LIBS_BUNDLE))
               .pipe(gulp.dest(CSS_PROD_DIR));
});