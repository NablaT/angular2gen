import gulp from 'gulp';
import {karma} from '../../utils/karma';
import {TEMPLATE_DIR} from '../../gulp.conf';

gulp.task('karma:prod', function (done) {
    karma(TEMPLATE_DIR, true, done);
});