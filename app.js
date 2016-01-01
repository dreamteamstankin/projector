var express = require('express');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/*-----------------------
  Passport.js config
------------------------- */
var Account = require('./app/models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


/*-----------------------
  Mongoose connect
------------------------- */
mongoose.connect('mongodb://localhost/projector_users');


/*-----------------------
  Express config
------------------------- */
var app = express();

app.set('views', path.join(__dirname, 'app/pages/'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    secret: 'test phrase',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public/')));


/*-----------------------
  Routers
------------------------- */
var index = require('./app/routes/index');
var task = require('./app/routes/projects/task');
var group = require('./app/routes/projects/group');
var groups = require('./app/routes/projects/groups');
var projects = require('./app/routes/projects/projects');
var users = require('./app/routes/passport/passport.js');

app.use('/', users);
app.use('/', index);
app.use('/', task);
app.use('/', group);
app.use('/', groups);
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
  res.render('err/error', {
    message: err.message,
    error: {}
  });
});


/*-----------------------
  Server
------------------------- */
http.createServer(app).listen(3000);


module.exports = app;
