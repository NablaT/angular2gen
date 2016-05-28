import gulp from 'gulp';
import path from 'path';
import {
    TEMPLATE_DIR,
    TMP_DIR
} from '../../gulp.conf';
import {typescript} from '../../utils/typescript';

///////////////////// Typescript Tasks /////////////////////

gulp.task('build:ts:prod', () => {
    let enableProdMode = true;
    return typescript([path.join(TEMPLATE_DIR, '**', '*.ts')], TMP_DIR, enableProdMode);
});