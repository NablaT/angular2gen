import del from 'del';
import {
    TMP_DIR,
    TEMPLATE_DIR
} from '../gulp.conf';

/**
 * This function deletes:
 * <ul>
 *   <li>Everything in the directory</li>
 *   <li>The directory itself</li>
 * </ul>
 *
 * @param {String} directory - The directory to delete.
 * @param {Function} callback - Callback function.
 */
export function clean (directory, callback) {
    return del(['{' + directory + ',' + directory + '/**/*}', TMP_DIR, TEMPLATE_DIR], callback);
}