import gulp from 'gulp';
import path from 'path';
import Builder from 'systemjs-builder';
import {
    JS_PROD_DIR,
    TMP_DIR,
    JS_PROD_APP_BUNDLE,
    SRC_DIR
} from '../../gulp.conf';

const BUNDLER_OPTIONS = {
    format: 'cjs',
    minify: true,
    mangle: false
};

gulp.task('bundles.app.prod', (done) => {
    let builder = new Builder('./', path.join(SRC_DIR, 'systemjs.config.js'));

builder.buildStatic(path.join(TMP_DIR, 'app', 'main'),
    path.join(JS_PROD_DIR, JS_PROD_APP_BUNDLE),
    BUNDLER_OPTIONS)
       .then(() => done());
});