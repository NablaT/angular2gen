import gulp from 'gulp';
import {clean} from '../../utils/clean';
import {DEV_DIR} from '../../gulp.conf';

gulp.task('clean:dev', (done) => {
    return clean(DEV_DIR, done);
});