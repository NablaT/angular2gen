import gulp from 'gulp';
import path from 'path';
import {
    TEMPLATE_DIR,
    APP_SRC
} from '../../gulp.conf';

gulp.task('template:html:prod', () => {
    return gulp.src(path.join(APP_SRC, '**', '*.html'))
               .pipe(gulp.dest(path.join(TEMPLATE_DIR, 'app')));
});
