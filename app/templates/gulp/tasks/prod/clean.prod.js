import gulp from 'gulp';
import {clean} from '../../utils/clean';
import {PROD_DIR} from '../../gulp.conf';

gulp.task('clean:prod', (done) => {
    return clean(PROD_DIR, done);
});