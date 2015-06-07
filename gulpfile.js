var gulp = require('gulp');
var $ = require('gulp-load-plugins');

gulp.task('js', function() {
  gulp.src('assets/js/app.jsx')
    .pipe($.webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('assets/**/*.*', ['default']);
});

gulp.task('default', ['js']);
