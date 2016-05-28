import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import requireDir from 'require-dir';

const plugins = gulpLoadPlugins();

requireDir('./gulp/tasks/dev');
requireDir('./gulp/tasks/prod');

gulp.task('karma:tdd:dev', plugins.shell.task(['start gulp karma:dev']));

gulp.task('build:js:dev', (callback) => {
    runSequence('template:ts:dev', 'build:ts:dev', callback);
});

gulp.task('build:dev', (callback) => {
    runSequence('clean:dev',
    ['build:assets:dev', 'build:html:dev', 'build:sass:dev', 'build:js:dev', 'copy:systemjs:dev'],
'build:index:dev',
    callback);
});

gulp.task('serve', (callback) => {
    runSequence('build:dev', 'server:dev', ['watch:dev', 'karma:tdd:dev'], callback);
});

gulp.task('build:prod', (callback) => {
    runSequence('clean:prod',
    ['build:assets:prod',
    'build:styles:prod',
    'template:html:prod',
    'template:sass:prod',
    'template:ts:prod'],
'karma:ts:prod',
    'karma:prod',
    'build:ts:prod',
    'clean:tests:prod',
    ['bundles.libs.prod', 'bundles.app.prod', 'bundle:css:prod'],
    'build:index:prod',
    callback);
});

/* gulp.task('serve:prod', gulp.series('build:prod', 'server:prod', function (done) {
 done();
 }));*/