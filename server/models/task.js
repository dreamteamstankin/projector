var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var taskSchema = Schema({
    title: String,
    name_id: {
        type: String,
        required: true,
        unique: true
    },
    branch: String,
    parent: Schema.Types.ObjectId,
    company_id: Schema.Types.ObjectId,
    user_id: Schema.Types.ObjectId,
    description: String,
    start_date: Date,
    finish_date: Date,
    status: Number,
    priority: Number,
    workflow: [{
        title: String,
        date_start: Date,
        date_finish: Date,
        user_id: Schema.Types.ObjectId,
        status: Number
    }],
    subtasks: [{
        user_id: Schema.Types.ObjectId,
        title: String,
        completed: Boolean,
        date_start: Date,
        date_finish: Date,
        count_money: Number,
        count_time: Number
    }],
    comments: [{
        user_id: Schema.Types.ObjectId,
        content: String,
        userName: String,
        created: Date
    }],
    branches: [{
        branch: String,
        title: String
    }]
});
module.exports = mongoose.model('Task', taskSchema);