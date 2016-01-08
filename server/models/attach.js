var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('../components/db')

// var Project = require('project.js')

var attasheSchema = new Schema({
    type: String,
    path: String
})

module.exports = mongoose.model('Attach', attasheSchema);
