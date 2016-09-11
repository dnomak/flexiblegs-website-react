'use strict';

var gulp = require('gulp');

var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var sass = require('gulp-sass');
var iconfont = require('gulp-iconfont');
var iconfontcss = require('gulp-iconfont-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var reload = browserSync.reload;

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
}

gulp.task('browser-sync', function() {
  browserSync({
    server : {},
    middleware : [ historyApiFallback() ],
    ghostMode: false
  });
});

gulp.task('scss',function() {
  gulp.src('scss/app.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', handleErrors))
    // .pipe(rename('bundle.css'))
    // start minify
    .pipe(sass({outputStyle: 'compressed'}).on('error', handleErrors))
    .pipe(rename('bundle.min.css'))
    // end minify
    .pipe(gulp.dest('css'))
    .pipe(reload({stream:true}))
});

gulp.task('iconfont', function() {
  gulp.src(['icon/*.svg'])
    .pipe(iconfontcss({
      path: 'scss',
      fontName: 'icon',
      targetPath: '../scss/generated/icon.scss',
      fontPath: '../font/'
    }))
    .pipe(iconfont({
      fontName: 'icon',
      normalize: true,
      formats: ['ttf', 'eot', 'woff', 'woff2']
     }))
    .pipe(gulp.dest('font'));
});

function buildScript(file, watch) {
  var props = {
    entries: ['./app/' + file],
    debug : true,
    transform:  [babelify.configure({stage : 0 })]
  };
  var bundler = watch ? watchify(browserify(props)) : browserify(props);
  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(rename('bundle.js'))
      // start minify
      // .pipe(buffer())
      // .pipe(uglify())
      // .pipe(rename('bundle.min.js'))
      // end minify
      .pipe(gulp.dest('js'))
      .pipe(reload({stream:true}))
  }
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });
  return rebundle();
}

gulp.task('js', function() {
  return buildScript('app.js', false);
});

gulp.task('watch', ['browser-sync', 'scss', 'js'], function () {
  gulp.watch('scss/**/*', ['scss']);
  return buildScript('app.js', true);
});

gulp.task('default', ['watch']);
