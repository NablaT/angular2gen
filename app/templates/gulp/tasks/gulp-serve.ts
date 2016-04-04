import * as gulp from 'gulp';
import {DEV_PATH, PROD_PATH} from '../gulp.conf';
import * as historyApiFallback from 'connect-history-api-fallback';
import {getBrowserSync} from '../browsersync';

let bs = getBrowserSync();

/**
 * This function initiates the server.
 *
 * @param {String} destinationDirectory - The destination directory.
 */
function init(destinationDirectory) {
    bs.init({
        server: {
            baseDir: destinationDirectory + '/',
            routes: {
                "/node_modules": "node_modules"
            }
        },
        injectChanges: true,
        middleware: [historyApiFallback()]
    });
}

/**
 * This function initialises the server in development mode.
 */
function serverDev() {
    init(DEV_PATH);
}

/**
 * This function initialises the server in production mode.
 */
function serverProd() {
    init(PROD_PATH);
}

///////////////////// Copy Tasks /////////////////////

gulp.task('server:dev', serverDev);
gulp.task('server:prod', serverProd);