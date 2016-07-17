var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: './src/app.js',
    extensions: ['.js', '.jsx'],
    debug: true
  })
  .transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.{js,jsx}', ['build']);
    gulp.watch('components/*.jsx', ['build']);
});
 
gulp.task('default', ['build', 'watch']);