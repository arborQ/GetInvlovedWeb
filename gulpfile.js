var gulp = require('gulp');
var gulpLess = require('gulp-less');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');

gulp.task('less', function(){
  gulp.src('sources/frontEnd/**/*.less')
  .pipe(gulpLess())
  .pipe(concatCss('bundle.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('less-watch', [ 'less' ], function(){
  gulp.watch('sources/frontEnd/**/*.less', [ 'less' ] );
});
