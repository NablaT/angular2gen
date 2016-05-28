import gulp from 'gulp';
import path from 'path';
import {sass} from '../../utils/sass';
import {
    TMP_DIR,
    STYLES_SRC
} from '../../gulp.conf';

gulp.task('build:styles:prod', () => {
    let enableProdMode = true;
    return sass(path.join(STYLES_SRC, '**', '*.scss'), TMP_DIR, enableProdMode);
});