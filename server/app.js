var express = require('express');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;

// /*-----------------------
// 	Mongoose connect
// ------------------------- */
mongoose.connect('mongodb://localhost:27017/projector');

var db = mongoose.connection;

db.on('error', function (err) {
    //console.log('Connection error:', err.message);
});
db.on('open', function () {
    console.log("Connected to DB!");
});

/*-----------------------
 Express config
 ------------------------- */
var app = express();

// app.use(express.static(path.join(__dirname, 'public/')));
// app.set('views', path.join(__dirname, 'app/pages/'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: 'ajkshfd187basd%$^sakjFGAKFH1',
    saveUninitialized: false,
    resave: false,
    cookie: {
        expires: new Date(Date.now() + 3600000),
        maxAge: 60000,
        secure: true
    }
}));

// TODO: убрать
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

//app.use(passport.initialize());
//app.use(passport.session());

/*-----------------------
 Routers
 ------------------------- */
var task = require('./routes/projects/task');
var milestone = require('./routes/projects/milestone');
var project = require('./routes/projects/project');
var user = require('./routes/user');
var company = require('./routes/company');

//app.use('/', index);
app.use('/', user);
app.use('/', isAuth, task);
app.use('/', isAuth, milestone);
app.use('/', isAuth, project);
app.use('/', isAuth, company);
//app.use('/', projects);

/*-----------------------
 PassportJS
 ------------------------- */
//
//passport.serializeUser(function (user, done) {
//    done(null, user._id);
//});
//
//passport.deserializeUser(function (id, done) {
//    UserModel.findById(id, function (err, user) {
//        done(err, user);
//    });
//});
//
//passport.use(new LocalStrategy(
//    function (username, password, done) {
//        UserModel.findOne({username: username}, function (err, user) {
//            if (err) {
//                return done(err);
//            }
//            if (!user) {
//                return done(null, false, {message: 'Incorrect username.'});
//            }
//            if (!user.validPassword(password)) {
//                return done(null, false, {message: 'Incorrect password.'});
//            }
//            return done(null, user);
//        });
//    }
//));
//
//app.post('/login',
//    passport.authenticate('local', {
//        successRedirect: '/',
//        failureRedirect: '/login',
//        failureFlash: true
//    })
//);
//
////app.get('/', isAuth, function(req, res){
////    res.json({ message: "Authenticated" })
////});
//app.get('/api/account', isAuth, function (req, res) {
//    res.json({message: "Authenticated"})
//});
//app.get('/api/unauthorized', function (req, res) {
//    res.json({message: "Authentication Error"})
//});
//app.get('/logout', function (req, res) {
//    req.logout();
//    res.redirect('/');
//});
//

var UserModel = require('./models/user.js');

function isAuth(req, res, next) {
    //TODO: сделать сессии
    UserModel.findOne({
        _id: req.query.token,
        company_id: req.query.company_id
    }, function(err, user){
        if (err) return res.json({status:false, auth:false});
        if (user) return next();
        else return res.json({status:false, auth:false});
        next();
    });
}


/*-----------------------
 Errors
 ------------------------- */
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

/*-----------------------
 Server
 ------------------------- */
http.createServer(app).listen(3000);


module.exports = app;