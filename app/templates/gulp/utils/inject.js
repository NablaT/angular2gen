import gulp from 'gulp';
import path from 'path';
import slash from 'slash';
import gulpLoadPlugins from 'gulp-load-plugins';
import {
    DEPENDENCIES,
    SRC_DIR,
    DEV_DIR,
    JS_PROD_DIR,
    JS_PROD_LIBS_BUNDLE,
    JS_PROD_APP_BUNDLE,
    CSS_PROD_DIR,
    CSS_PROD_BUNDLE
} from '../gulp.conf';

const plugins = gulpLoadPlugins();

/**
 * This function inject dependencies in the index.html.
 *
 * @param {String} destinationDirectory - The destination directory.
 * @param {String} name - Optional tag name.
 */
export function inject (destinationDirectory, name = null) {
    return plugins.if(destinationDirectory === DEV_DIR,
        injectDev(destinationDirectory, name),
        injectProd(destinationDirectory, getProdDependencies()));
}

/**
 * This function inject files in dev mode.
 *
 * @param {String} destinationDirectory - The destination directory.
 * @param {String} name - Optional tag name.
 */
function injectDev (destinationDirectory, name) {
    return plugins.inject(gulp.src(getInjectablesDependenciesRef(name, destinationDirectory), {read: false}), {
        name,
        transform: transformPath(destinationDirectory)
    });
}

/**
 * This function inject files in prod mode.
 *
 * @param {String} destinationDirectory - The destination directory.
 * @param {Array<string>} files - Files to inject.
 * @returns {*}
 */
function injectProd (destinationDirectory, files) {
    return plugins.inject(gulp.src(files, {read: false}), {
        files,
        transform: transformPath(destinationDirectory)
    });
}

/**
 * Returns the prod injectable dependencies.
 */
function getProdDependencies () {
    return [path.join(JS_PROD_DIR, JS_PROD_LIBS_BUNDLE),
        path.join(JS_PROD_DIR, JS_PROD_APP_BUNDLE),
        path.join(CSS_PROD_DIR, CSS_PROD_BUNDLE)]
}

/**
 * Returns the dev injectable dependencies, mapping its filename to its path.
 *
 * @param {String} name - The dependency to be mapped.
 * @param {String} destinationDirectory - The destination directory.
 */
function getInjectablesDependenciesRef (name, destinationDirectory) {
    return DEPENDENCIES
        .filter(dep => dep['inject'] === name)
        .map(mapPath(destinationDirectory));
}

/**
 * Maps the path of the given dependency to its path according to the applications environment.
 *
 * @param {String} destinationDirectory - The destination directory.
 */
function mapPath (destinationDirectory) {
    return function (dep) {
        let envPath = dep.src;
        if (envPath.startsWith(SRC_DIR)) {
            envPath = path.join(destinationDirectory, dep.src.replace(SRC_DIR, ''));
        }
        return envPath;
    }
}

/**
 * Transform the path of a dependency to its location within the `dist` directory.
 *
 * @param {String} destinationDirectory - The destination directory.
 */
function transformPath (destinationDirectory) {
    return function (filepath) {
        if (filepath.startsWith(slash('/' + destinationDirectory))) {
            filepath = filepath.replace(slash('/' + destinationDirectory) + '/', '');
        }
        arguments[0] = path.join(filepath) + `?${Date.now()}`;
        return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
    };
}