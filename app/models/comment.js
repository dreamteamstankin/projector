var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('../components/db')

// var Project = require('project.js')

var commentSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    text: String,
    date: Date,
    attaches: [{
        type: Schema.Types.ObjectId,
        ref: 'Attach'
    }]
});

module.exports = mongoose.model('Comment', commentSchema);
