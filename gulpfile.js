var gulp = require('gulp'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    nodemon = require('gulp-nodemon'),
    imagemin = require('gulp-imagemin'),
    prefixer = require('gulp-autoprefixer'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["/static/**/*.*"],
        port: 7000,
	});
});

gulp.task('watch', ['less', 'js', 'images', 'browser-sync'], function() {
    gulp.watch("app/static/less/**/*.less", ['less']);
    gulp.watch("app/static/js/**/*.js", ['js']);
    gulp.watch("app/static/**/*", ['images'], reload);
});

gulp.task('less', function() {
    gulp.src("app/static/less/**/*.less")
        .pipe(less())
        .pipe(prefixer())
        .pipe(csso())
        .on('error', console.log)
        .pipe(gulp.dest("public/css/"))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('js', function() {
    gulp.src(['app/static/js/**/*.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('public/js/'))
        .pipe(uglify())
        .pipe(reload({
            stream: true
        }));
});
gulp.task('images', function() {
    gulp.src('app/static/img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('public/img/'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('nodemon', function(cb) {
    var called = false;
    return nodemon({
        script: './bin/www'
    }).on('start', function() {
        if (!called) {
            called = true;
            cb();
        }
    });
});
