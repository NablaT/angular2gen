import gulp from 'gulp';
import {karma} from '../../utils/karma';
import {DEV_DIR} from '../../gulp.conf';

gulp.task('karma:dev', function (done) {
    karma(DEV_DIR, false, done);
});