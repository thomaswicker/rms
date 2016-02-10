//gulp requires
var gulp = require('gulp'),
haml = require('gulp-ruby-haml'),
sass = require('gulp-ruby-sass'),
minifycss = require('gulp-minify-css'),
wait = require('gulp-wait'),
connect = require('gulp-connect'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
rename = require("gulp-rename"),
livereload = require('gulp-livereload');

//source variables
var hamlSources = ['components/views/**/*.haml'],
    sassSources = ['components/scss/application.scss'],
    jsSources = ['components/js/application.js'];

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    fallback: "test.html"
  });
});

//gulp sass tasks
gulp.task('sass', function () {
  return sass(sassSources)
    .on('error', sass.logError)
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

//gulp javascript tasks
gulp.task('js', function() {
    return gulp.src(jsSources)
    .pipe(concat('application.js'))
    .pipe(gulp.dest('js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js'))
    .pipe(connect.reload());
});

//gulp haml tasks
gulp.task('haml', function() {
  gulp.src(hamlSources)
    .pipe(haml())
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

//gulp watch tasks
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('components/js/**/*.js', ['js']).on('change', stackReload);
    gulp.watch('components/scss/**/*.scss', ['sass']).on('change', stackReload);
    gulp.watch('components/views/**/*.haml', ['haml']).on('change', stackReload);

      // timeout variable
    var timer = null;

    // delay reload function
    function stackReload() {
        var reload_args = arguments;

        // stop timeout function > livereload if this function is ran within the last 750ms
        if (timer) clearTimeout(timer);

        // Check if any gulp task is still running
        if (!gulp.isRunning) {
            timer = setTimeout(function() {
                livereload.changed.apply(null, reload_args);
            }, 750);
        }
    }

});


//runs all tasks through one command of 'gulp'
gulp.task('default', ['sass', 'js', 'haml', 'webserver', 'watch']);
