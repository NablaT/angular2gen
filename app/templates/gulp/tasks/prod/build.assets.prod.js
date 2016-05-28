import gulp from 'gulp';
import path from 'path';
import {
    PROD_DIR,
    ASSETS_SRC
} from '../../gulp.conf';

gulp.task('build:assets:prod', () => {
    return gulp.src(path.join(ASSETS_SRC, '**', '*'))
               .pipe(gulp.dest(path.join(PROD_DIR, 'assets')));
});
