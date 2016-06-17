'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var webserver = require('gulp-webserver');

gulp.task('css:watch', function () {
	gulp.watch('./assets/css/**/*.css', ['css']);
});

gulp.task('webserver', function () {
	gulp.src('')
		.pipe(webserver({
			livereload: true,
			port: 4000,
			directoryListening: true,
			open: true
		}));
});

gulp.task('css', function () {
	var processors = [
		autoprefixer({ browsers: ['last 4 versions', '> 1%', 'ie 8'] })
	];

	return gulp.src('./**/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest(''));
});

gulp.task('default', ['css:watch', 'webserver']);