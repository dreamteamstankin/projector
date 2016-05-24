var express = require('express');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



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
// app.use(express.static(path.join(__dirname, 'public/')));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);

/*-----------------------
	Routers
------------------------- */
var task = require('./routes/projects/task');
var milestone = require('./routes/projects/milestone');
var project = require('./routes/projects/project');
var user = require('./routes/user');
var company = require('./routes/company');
//
//app.use('/', index);
app.use('/', task);
app.use('/', milestone);
app.use('/', project);
app.use('/', user);
app.use('/', company);
//app.use('/', projects);


/*-----------------------
	Errors
------------------------- */
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
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