const gulp = require('gulp')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

gulp.task('sass', () => {
  return gulp.src('./static/sass/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream())
})

gulp.task('es6', () => {
  return gulp.src('./static/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.stream())
})

gulp.task('serve', ['sass', 'es6'], () => {
  browserSync.init({
    server: './dist/'
  });

  gulp.watch('./static/sass/*.scss', ['sass'])
  gulp.watch('./static/js/*.js', ['es6'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['serve'])