import gulp from 'gulp';
import path from 'path';
import {sass} from '../../utils/sass';
import {
    DEV_DIR,
    SRC_DIR
} from '../../gulp.conf';

gulp.task('build:sass:dev', () => {
    return sass(path.join(SRC_DIR, '**', '*.scss'), DEV_DIR);
});