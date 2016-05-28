import gulp from 'gulp';
import path from 'path';
import {sass} from '../../utils/sass';
import {
    TEMPLATE_DIR,
    APP_SRC
} from '../../gulp.conf';

gulp.task('template:sass:prod', () => {
    let enableProdMode = true;
    return sass(path.join(APP_SRC, '**', '*.scss'), TEMPLATE_DIR, enableProdMode);
});