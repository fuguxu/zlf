const gulp = require("gulp");
const sftp = require("gulp-sftp");


/**
 * gulp p:dev
 * **/
gulp.task('p:dev', function () {
    return gulp.src('dist/**')
        .pipe(sftp({
            host: '47.106.77.132',
            user: 'zlftomcat',
            pass:'456@zlf',
            remotePath : '/usr/local/zlf/web/user-zlf/webapps/ROOT'
        }));
});
