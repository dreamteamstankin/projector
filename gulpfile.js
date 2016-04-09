'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    jade = require('gulp-jade'),
    shell = require('gulp-shell'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    nodemon = require('gulp-nodemon'),
    imagemin = require('gulp-imagemin'),
    prefixer = require('gulp-autoprefixer'),
    pngquant = require('imagemin-pngquant'),
    browserify = require('gulp-browserify'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


var config = {
    server: {
        files: "./server/**/*.*",
        expressPort: 3000,
        port: 7000,
        main: "./server/app.js",
        js: "./server/**/*.js"
    },
    client: {
        port: 8080,
        files: './client/**/*',
        server: './public/'
    },
    from: {
        less: "./client/less/*.less",
        allless: "./client/less/**/*.less",
        js: ["./client/js/**/*.js"],
        img: "./client/img/**/*",
        jade: "./client/pages/**/*.jade",
        templates: "./client/templates/**/*",
        alljade: ["./client/pages/**/*.jade", "./client/jade/**/*.jade"]
    },
    to: {
        css: "./public/css/",
        js: "./public/js/",
        img: "./public/img/",
        html: "./public/",
        templates: "./public/templates/"
    }
};

gulp.task('server', ['server-sync']);
gulp.task('client', ['jade', 'less', 'js', 'images', 'templates', 'client-sync'], function() {
    gulp.watch(config.from.alljade, ['jade']);
    gulp.watch(config.from.allless, ['less']);
    gulp.watch(config.from.js, ['js']);
    gulp.watch(config.from.img, ['images']);
    gulp.watch(config.from.templates, ['templates']);
    // return shell.task(['electron .'])()
});

gulp
    .task('jade', function() {
        gulp.src(config.from.jade)
            .pipe(jade({
                pretty: true
            }))
            .on('error', console.log)
            .pipe(gulp.dest(config.to.html))
            .pipe(reload({
                stream: true
            }));
    })
    .task('client-sync', function() {
        browserSync.init(null, {
            // open: false,
            notify: false,
            server: config.client.server,
            files: config.client.files,
            port: config.client.port
        });
    })
    .task('server-sync', ['nodemon'], function() {
        browserSync.init(null, {
            notify: false,
            proxy: "http://localhost:" + config.server.expressPort,
            files: config.server.files,
            port: config.server.port
        });
    })
    .task('nodemon', function(cb) {
        var called = false;
        return nodemon({
            script: config.server.main
        }).on('start', function() {
            if (!called) {
                called = true;
                cb();
            }
        });
    })
    .task('less', function() {
        gulp.src(config.from.less)
            .pipe(less())
            .on('error', console.log)
            .pipe(prefixer())
            .pipe(csso())
            .pipe(gulp.dest(config.to.css))
            .pipe(reload({
                stream: true
            }));
    })
    .task('js', function() {
        gulp.src(config.from.js)
            //.pipe(babel({
            //    presets: ['es2015']
            //}))
            .pipe(concat('app.js'))
            //.pipe(uglify())
            .pipe(gulp.dest(config.to.js))
            .pipe(reload({
                stream: true
            }));
    })
    .task('images', function() {
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
    })
    .task('templates', function() {
        gulp.src(config.from.templates)
            .pipe(gulp.dest(config.to.templates))
            .pipe(reload({
                stream: true
            }));
    });
