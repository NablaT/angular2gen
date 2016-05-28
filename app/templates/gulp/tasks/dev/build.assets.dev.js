import gulp from 'gulp';
import path from 'path';
import {
    DEV_DIR,
    ASSETS_SRC
} from '../../gulp.conf';

gulp.task('build:assets:dev', () => {
    return gulp.src(path.join(ASSETS_SRC, '**', '*'))
               .pipe(gulp.dest(path.join(DEV_DIR, 'assets')));
});