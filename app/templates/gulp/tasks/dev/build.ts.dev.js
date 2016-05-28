import gulp from 'gulp';
import path from 'path';
import {
    TEMPLATE_DIR,
    DEV_DIR
} from '../../gulp.conf';
import {typescript} from '../../utils/typescript';

///////////////////// Typescript Tasks /////////////////////

gulp.task('build:ts:dev', () => {
    return typescript([path.join(TEMPLATE_DIR, '**', '*.ts')], DEV_DIR);
});