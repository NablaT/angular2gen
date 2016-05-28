import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';

let bs = null;

/**
 * This function creates a singleton of a browser sync server, and returns it.
 */
export function getBrowserSync () {
    if (bs === null) {
        return bs = browserSync.create('Server');
    }
    return browserSync.get('Server');
}

/**
 * This function initiates the server.
 *
 * @param {String} destinationDirectory - The destination directory.
 */
export function init (destinationDirectory) {
    bs.init({
        server       : {
            baseDir: destinationDirectory + '/',
            routes : {
                "/node_modules": "node_modules"
            }
        },
        injectChanges: true,
        middleware   : [historyApiFallback()]
    });
}