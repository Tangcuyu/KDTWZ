var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    ngBuild = require('gulp-ng-build'),
    del = require('del');

gulp.task('scripts', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/public/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function () {
    return gulp.src('src/public/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/public/images'))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function () {
    return del(['front/dist']);
});


gulp.task('ngb', ['clean'], function () {
    return gulp.src('front')
        .pipe(ngBuild)
        .pipe(gulp.dest('front/dist'))
        .pipe(notify({ message: 'ng build complete' }));
});

gulp.task('watch', function () {

    // Watch .js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('src/images/**/*', ['images']);

});

gulp.task('default', ['clean'], function () {
    gulp.start('styles', 'scripts', 'images');
});
