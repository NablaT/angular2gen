import gulp from 'gulp';
import path from 'path';
import {TEMPLATE_DIR} from '../../gulp.conf';
import {typescript} from '../../utils/typescript';

///////////////////// Typescript Tasks /////////////////////

gulp.task('karma:ts:prod', () => {
    return typescript([path.join(TEMPLATE_DIR, '**', '*.ts')], TEMPLATE_DIR);
});