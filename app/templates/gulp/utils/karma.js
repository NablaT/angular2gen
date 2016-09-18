import karmaServer from 'karma';

const Server = karmaServer.Server;

/**
 * This function launches karma.
 *
 * @param {string} destinationDirectory - The destination directory.
 * @param {boolean} singleRun - Tests are run once or in watch mode.
 * @param {Function} done - Callback
 */
export function karma (destinationDirectory, singleRun, done) {

    // This is to specifies files that need coverage dynamically.
    let filesCoverage                                       = {};
    filesCoverage[destinationDirectory + '/**/!(*spec).js'] = ['coverage'];

    let appBase    = destinationDirectory + '/app/';       // transpiled app JS and map files
    let appSrcBase = 'src/app/';       // app source TS files
    let appAssets  = '/base/' + destinationDirectory + '/app/'; // component assets fetched by Angular's compiler

    new Server({
        basePath  : '',
        frameworks: ['jasmine'],
        plugins  : [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-mocha-reporter',
            'karma-coverage'
        ],
        reporters : [
            'mocha', 
            'coverage'
        ],
        files     : [
            // System.js for module loading
            'node_modules/systemjs/dist/system.src.js',

            // Polyfills
            'node_modules/core-js/client/shim.js',
            'node_modules/reflect-metadata/Reflect.js',

            // zone.js
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            // Paths loaded via module imports:
            // Angular itself
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

            {pattern: 'src/systemjs.config.js', included: false, watched: false},
            'karma-test-shim.js',

            // transpiled application & spec code paths loaded via module imports
            {pattern: appBase + '**/*.js', included: false, watched: true},


            // Asset (HTML & CSS) paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            {pattern: appBase + '**/*.html', included: false, watched: true},
            {pattern: appBase + '**/*.css', included: false, watched: true},

            // Paths for debugging with source maps in dev tools
            {pattern: appSrcBase + '**/*.ts', included: false, watched: false},
            {pattern: appBase + '**/*.js.map', included: false, watched: false},

        ],
        // Proxied base paths for loading assets
        proxies: {
            // required for component assets fetched by Angular's compiler
            "/app/": appAssets
        },

        singleRun: singleRun,
        autoWatch: !singleRun,
        browsers : ['Chrome'], //, 'IE' can be used too.

        preprocessors: filesCoverage,

        // optionally, configure the reporter
        coverageReporter: {
            dir      : 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'html'}
            ]
        }
    }, function () {
        done();
    }).start();
}