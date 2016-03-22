var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    watch   = require('gulp-watch');

// variables globales paths

var sitioPath = 'sitio/';
var desarrolloPath = 'desarrollo/';


// task sass

gulp.task('sass', function(){
    gulp.src(desarrolloPath + 'scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest(sitioPath + 'css'));
});

// task watch

gulp.task('watch', function(){
   gulp.watch(desarrolloPath + 'scss/**/*.scss',['sass']);
});