import gulp from 'gulp';
import path from 'path';
import {
    DEV_DIR,
    SRC_DIR
} from '../../gulp.conf';

gulp.task('copy:systemjs:dev', () => {
    return gulp.src(path.join(SRC_DIR, 'systemjs.config.js'))
               .pipe(gulp.dest(DEV_DIR));
});
