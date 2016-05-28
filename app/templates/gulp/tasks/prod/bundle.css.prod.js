import gulp from 'gulp';
import path from 'path';
import {
    CSS_PROD_DIR,
    TMP_DIR,
    CSS_PROD_BUNDLE
} from '../../gulp.conf';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

gulp.task('bundle:css:prod', () => {
    return gulp.src(path.join(TMP_DIR, 'styles', '**', '*'))
               .pipe(plugins.concatCss(CSS_PROD_BUNDLE))
               .pipe(gulp.dest(CSS_PROD_DIR));
});
