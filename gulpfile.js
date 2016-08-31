var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;

// gulp.task('index', function () {
//   var target = gulp.src('./index.html');
  
//   var sources = gulp.src(['./bower_components/**/*.min.js','./bower_components/**/*.css'], {read: false});
 
//   return target.pipe(inject(sources))
//     .pipe(gulp.dest('./'));
// });
gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./dest'));
});
//gulp.task('default', ['index','bower']);
gulp.task('default', ['bower']);
