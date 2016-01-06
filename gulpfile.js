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

var config = {
    port: 3000,
    newport: 7000,
    allstatic: "/static/**/*.*",
    from: {
        less: "app/static/less/*.less",
        allless: "app/static/less/**/*.less",
        js: "app/static/js/**/*.js",
        img: "app/static/img/**/*",
        views: ["app/views/**/*", "app/pages/**/*"]
    },
    to: {
        css: "public/css/",
        js: "public/js/",
        img: "public/img/"
    }
}

gulp.task('w', ['less', 'js', 'images', 'browser-sync'], function() {
    gulp.watch(config.from.allless, ['less']);
    gulp.watch(config.from.js, ['js']);
    gulp.watch(config.from.img, ['images'], reload);
    gulp.watch(config.from.views, reload);
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:" + config.port,
        files: config.allstatic,
        port: config.newport
    });
});

gulp.task('less', function() {
    gulp.src(config.from.less)
        .pipe(less())
        .on('error', console.log)
        .pipe(prefixer())
        .pipe(csso())
        .pipe(gulp.dest(config.to.css))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('js', function() {
    gulp.src(config.from.js)
        .pipe(concat('index.js'))
        .pipe(gulp.dest(config.to.js))
        .pipe(uglify())
        .pipe(reload({
            stream: true
        }));
});

gulp.task('images', function() {
    gulp.src(config.from.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(config.to.img))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('nodemon', function(cb) {
    var called = false;
    return nodemon({
        script: 'app.js'
    }).on('start', function() {
        if (!called) {
            called = true;
            cb();
        }
    });
});
