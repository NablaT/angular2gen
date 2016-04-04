import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import * as requireDir from 'require-dir';

requireDir('./gulp/tasks');

gulp.task('serve', callback =>
    runSequence('build:dev', 'watch', callback)
);

gulp.task('serve:prod', callback =>
    runSequence('build:prod', 'server:prod')
);

gulp.task('build:dev', callback =>
    runSequence('clean:dev', ['copy:dev', 'ts:dev', 'sass:dev'], 'inject:dev', 'server:dev', callback)
);

gulp.task('build:prod', callback =>
    runSequence('clean:prod', ['copy:prod', 'ts:prod', 'sass:prod'], 'inject:prod', 'useref:prod', callback)
);