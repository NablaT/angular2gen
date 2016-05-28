import gulp from 'gulp';
import path from 'path';
import runSequence from 'run-sequence';
import {
    SRC_DIR,
    INDEX,
    APP_SRC
} from '../../gulp.conf';

gulp.task('watch:scripts:dev', () => {
    gulp.watch(path.join(SRC_DIR, '**', '*.ts'), (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        runSequence('template:ts:dev', 'build:ts:dev');
    })
});

gulp.task('watch:sass:dev', () => {
    gulp.watch(path.join(SRC_DIR, '**', '*.scss'), (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        runSequence('build:sass:dev');
    })
});

gulp.task('watch:index:dev', () => {
    gulp.watch(path.join(SRC_DIR, INDEX), (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        runSequence('build:index:dev');
    })
});

gulp.task('watch:html:dev', () => {
    gulp.watch(path.join(APP_SRC, '**', '*.html'), (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        runSequence('build:html:dev');
    })
});

gulp.task('watch:dev', callback => {
    runSequence('watch:scripts:dev', 'watch:sass:dev', 'watch:index:dev', 'watch:html:dev', callback);
});