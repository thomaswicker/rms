//gulp requires
var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
rename = require("gulp-rename"),
livereload = require('gulp-livereload');

//source variables
var jsSources = ['components/js/application.js'];
var sassSources = ['components/scss/styles.scss'];


//gulp javascript tasks
gulp.task('js', function() {
    return gulp.src(jsSources)
    .pipe(concat('application.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js'))
});

gulp.task('sass', function() {
	return gulp.src(sassSources)
	        .pipe(sass({ style: 'expanded' }))
	        .pipe(minifycss())
	        .pipe(gulp.dest('./css/'))
    			.pipe(rename({suffix: '.min'}))
    			 .pipe(minifycss())
	        .pipe(gulp.dest('./css/'));
});


//gulp watch tasks
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(jsSources, ['js']).on('change', livereload.changed);
    gulp.watch('components/scss/**/*.scss', ['sass']).on('change', livereload.changed);
    gulp.watch('components/css/styles.min.css', ['css']).on('change', livereload.changed);
});


//runs all tasks through one command of 'gulp'
gulp.task('default', ['js', 'sass', 'watch']);
