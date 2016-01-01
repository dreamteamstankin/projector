'use strict';
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

var path = {
    from: {
        less:  "app/static/less/*.less",
        allless: "app/static/less/**/*.less",
        js: "app/static/js/**/*.js",
        img: "app/static/img/**/*",
        jade: ["app/views/**/*", "app/pages/**/*"]
    },
    to: {
        css: "public/css/",
        js: "public/js/",
        img: "public/img/"
    }
}

gulp.task('w', ['less', 'js', 'images', 'browser-sync'], function() {
    gulp.watch(path.from.allless, ['less']);
    gulp.watch(path.from.js, ['js']);
    gulp.watch(path.from.img, ['images'], reload);
    gulp.watch(path.from.jade, reload);
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["/static/**/*.*"],
        port: 7000
    });
});

gulp.task('less', function() {
    gulp.src(path.from.less)
        .pipe(less())
        .on('error', console.log)
        .pipe(prefixer())
        .pipe(csso())
        .pipe(gulp.dest(path.to.css))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('js', function() {
    gulp.src(path.from.js)
        .pipe(concat('index.js'))
        .pipe(gulp.dest(path.to.js))
        .pipe(uglify())
        .pipe(reload({
            stream: true
        }));
});
gulp.task('images', function() {
    gulp.src(path.from.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.to.img))
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
