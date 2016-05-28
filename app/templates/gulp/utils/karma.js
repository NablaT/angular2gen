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
    var filesCoverage                                       = {};
    filesCoverage[destinationDirectory + '/**/!(*spec).js'] = ['coverage'];

    new Server({
        basePath  : './',
        frameworks: ['jasmine'],
        reporters : ['mocha', 'coverage'],
        files     : [

            // Polyfills.
            'node_modules/core-js/client/shim.min.js',

            'node_modules/reflect-metadata/Reflect.js',

            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Zone.js dependencies
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs.
            {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},

            // paths loaded via module imports
            // Angular itself
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},

            // suppress annoying 404 warnings for map
            {pattern: 'node_modules/**/*.js.map', included: false, watched: false},

            {pattern: destinationDirectory + '/**/*.js', included: false, watched: true},

            // PhantomJS2 (and possibly others) might require it
            {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false},

            // Shim for systemjs import in karma.
            'test-main.js',

            // paths to support debugging with source maps in dev tools
            {pattern: 'src/**/*.ts', included: false, watched: false},
            {pattern: destinationDirectory + '/**/*.js.map', included: false, watched: false},

            {pattern: destinationDirectory + '/**/*.html', included: false, watched: true},
            {pattern: destinationDirectory + '/**/*.css', included: false, watched: true}
        ],

        singleRun: singleRun,
        autoWatch: !singleRun,
        browsers : ['PhantomJS'], //, 'IE' can be used too.
        plugins  : [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter',
            'karma-coverage'
        ],

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