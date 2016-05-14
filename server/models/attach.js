var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Project = require('projectModel.js')

var attasheSchema = new Schema({
    type: String,
    path: String
});

module.exports = mongoose.model('Attach', attasheSchema);
