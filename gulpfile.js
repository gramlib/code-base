const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const gulpCopy = require('gulp-copy');
const alias = require('gulp-ts-alias');

const tsProject = ts.createProject('tsconfig.json', {
  inlineSourceMap: false,
});

function tsCompiler() {
  return tsProject
    .src()
    .pipe(alias({configuration: tsProject.config}))
    .pipe(tsProject())
    .pipe(gulp.dest('esm'));
}

function cleanTask() {
  return gulp
    .src('./esm', {
      allowEmpty: true,
    })
    .pipe(clean());
}

function copyLess() {
  return gulp
    .src(['./src/**/*.less', './src/**/*.css'])
    .pipe(gulpCopy('esm', {prefix: 1}));
}

exports.buildEsm = gulp.series(cleanTask, gulp.series(tsCompiler, copyLess));
