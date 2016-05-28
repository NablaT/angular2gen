import gulp from 'gulp';
import path from 'path';
import {
    DEV_DIR,
    APP_SRC
} from '../../gulp.conf';
import {getBrowserSync} from '../../utils/browsersync';

let bs = getBrowserSync();

gulp.task('build:html:dev', () => {
    return gulp.src(path.join(APP_SRC, '**', '*.html'))
               .pipe(gulp.dest(path.join(DEV_DIR, 'app')))
               .pipe(bs.stream());
});
