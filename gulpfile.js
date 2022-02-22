const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

gulp.task('compress-images', function() {
  return gulp.src('img/aboutMeSection/boatScreenshot.jpg')
    .pipe(imagemin({
      progressive: true, optimizationLevel:5}))
    .pipe(gulp.dest('img/aboutMeSection'));
})

gulp.task('convertImages', function() {
  return gulp.src('img/aboutMeSection/boatScreenshot.jpg')
  .pipe(webp())
  .pipe(gulp.dest('img/aboutMeSection'));
})

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;
