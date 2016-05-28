import gulp from 'gulp';
import path from 'path';
import {
    SRC_DIR,
    TEMPLATE_DIR
} from '../../gulp.conf';
import {template} from '../../utils/template';

gulp.task('template:ts:dev', function () {
    return template(path.join(SRC_DIR, '**', '*.ts'), TEMPLATE_DIR, 'dev');
});