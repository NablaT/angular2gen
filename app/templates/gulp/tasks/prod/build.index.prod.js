import gulp from 'gulp';
import path from 'path';
import gulpLoadPlugins from 'gulp-load-plugins';
import {
    SRC_DIR,
    INDEX,
    PROD_DIR
} from '../../gulp.conf';
import {inject} from '../../utils/inject';

const plugins = gulpLoadPlugins();

gulp.task('build:index:prod', function () {
    return gulp.src(path.join(SRC_DIR, INDEX))
               .pipe(inject(PROD_DIR))
               .pipe(plugins.template({ENV: 'prod'}))
               .pipe(gulp.dest(PROD_DIR));
});