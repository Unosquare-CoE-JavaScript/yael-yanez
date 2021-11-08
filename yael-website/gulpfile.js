const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  return src('./src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['./public/**/*.html'] }))
    .pipe(dest('./public/css'));
}

function watchTask() {
  watch(['./src/scss/**/*.scss', './public/**/*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
