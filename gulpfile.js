var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('images', function () {
    return gulp.src('src/public/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/public/images'))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('cp', function(){
    return gulp.src('front/dist/front/**/*')
        .pipe(gulp.dest('dist/public/front'))
        .pipe(notify({ message: 'front files copy to dist'}));
});

gulp.task('clean:front', function () {
    return del(['dist/public/front']);
});


// Default task
gulp.task('default', ['clean:front'], function () {
    gulp.start('cp');
});

gulp.task('watch', function () {

    // Watch front side files
    gulp.watch('front/dist/**/*', ['cp']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);

});

