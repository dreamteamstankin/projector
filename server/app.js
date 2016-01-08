var express = require('express');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passportJS = require('passport');
var LocalStrategy = require('passport-local').Strategy;


/*-----------------------
	PassportJS config
------------------------- */
var User = require('./models/user');
passportJS.use(new LocalStrategy(User.authenticate()));
passportJS.serializeUser(User.serializeUser());
passportJS.deserializeUser(User.deserializeUser());


// /*-----------------------
// 	Mongoose connect
// ------------------------- */
// mongoose.connect('mongodb://localhost/mongo_projects');

/*-----------------------
	Express config
------------------------- */
var app = express();

// app.set('views', path.join(__dirname, 'app/pages/'));
// app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(expressSession({
    secret: 'test phrase',
    resave: false,
    saveUninitialized: false
}));
app.use(passportJS.initialize());
app.use(passportJS.session());
// app.use(express.static(path.join(__dirname, 'public/')));


/*-----------------------
	Routers
------------------------- */
var index = require('./routes/index');
var task = require('./routes/projects/task');
var project = require('./routes/projects/project');
var projects = require('./routes/projects/projects');
var passport = require('./routes/passport/passport');

app.use('/', passport);
app.use('/', index);
app.use('/', task);
app.use('/', project);
app.use('/', projects);


/*-----------------------
	Errors
------------------------- */
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
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
