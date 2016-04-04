/**
 * This is the configuration file.
 *
 * This file is used by gulp tasks.
 *
 * Created by grahbari on 01/04/2016.
 */

/**
 * @constant {string[]} Constant containing all path to shims dependencies we want in the project.
 */
export const SHIMS_DEPENDENCIES:string[] = [
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
];

/**
 * @constant {string[]} Constant containing all path to libraries dependencies we want in the project.
 */
export const LIBS_DEPENDENCIES:string[] = [
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/angular2/bundles/angular2-polyfills.js'
];

/**
 * @constant {string} The path of the development directory.
 */
export const DEV_PATH:string = 'dist/dev';

/**
 * @constant {string} The path of the production directory.
 */
export const PROD_PATH:string = 'dist/prod';

/**
 * @constant {string} Regular expression matching all files.
 */
export const ALL_FILES:string = 'src/**/*';

/**
 * @constant {string} Regular expression matching all typescript files.
 */
export const TYPESCRIPT_FILES:string = 'src/**/*.ts';

/**
 * @constant {string} Regular expression matching all sass files.
 */
export const SASS_FILES:string = 'src/**/*.scss';

/**
 * @constant {string} Regular expression matching all spec files.
 */
export const SPEC_FILES:string = 'src/**/*.spec.ts';

/**
 * @constant {string} The name of the index.
 */
export const INDEX:string = 'index.html';

/**
 * @constant {string} The libs tag name.
 */
export const LIBS:string = 'libs';

/**
 * @constant {string} The shimd tag name.
 */
export const SHIMS:string = 'shims';