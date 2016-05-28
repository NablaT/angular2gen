import gulp from 'gulp';
import del from 'del';
import path from 'path';
import {TMP_DIR} from '../../gulp.conf';

gulp.task('clean:tests:prod', (done) => {
    return del(path.join(TMP_DIR, '**', '*.spec.js'), done);
});