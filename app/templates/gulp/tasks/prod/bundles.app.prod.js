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

const SYSTEM_BUILDER_CONFIG = {
    defaultJSExtensions: true,
    paths              : {
        [path.join(TMP_DIR, '*')]: path.join(TMP_DIR, '*'),
        '*'                      : 'node_modules/*'
    },
    packages           : {
        '@angular/core'                    : {
            main            : 'index.js',
            defaultExtension: 'js'
        },
        '@angular/compiler'                : {
            main            : 'index.js',
            defaultExtension: 'js'
        },
        '@angular/common'                  : {
            main            : 'index.js',
            defaultExtension: 'js'
        },
        '@angular/http'                    : {
            main            : 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser'        : {
            main            : 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
            main            : 'index.js',
            defaultExtension: 'js'
        },
        '@angular/router-deprecated'       : {
            main            : 'index.js',
            defaultExtension: 'js'
        },
        '@angular/router'                  : {
            main            : 'index.js',
            defaultExtension: 'js'
        },
        'rxjs'                             : {
            defaultExtension: 'js'
        }
    }
};

gulp.task('bundles.app.prod', (done) => {
    //let builder = new Builder(SYSTEM_BUILDER_CONFIG);
    let builder = new Builder('./', path.join(SRC_DIR, 'systemjs.config.js'));

    builder.buildStatic(path.join(TMP_DIR, 'app', 'main'),
        path.join(JS_PROD_DIR, JS_PROD_APP_BUNDLE),
        BUNDLER_OPTIONS)
           .then(() => done());
});