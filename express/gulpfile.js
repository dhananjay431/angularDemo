var gulp = require('gulp');
var concat = require('gulp-concat');
livereload = require('gulp-livereload');
var paths = {
  scripts: ['./src/*.js']
};

gulp.task('scripts', function() {
  return gulp.src('./src/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('watch', function() {
    livereload.listen();
  gulp.watch(paths.scripts, ['scripts']);
  
});
gulp.task('default', ['watch', 'scripts']);