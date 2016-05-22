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
    workflow: [{
        title: String
    }],
    subtasks: [{
        user_id: Schema.Types.ObjectId,
        title: String
    }],
    comments: [{
        user_id: Schema.Types.ObjectId,
        content: String
    }],
    branches: [{
        branch: String,
        title: String
    }]
});

module.exports = mongoose.model('Task', taskSchema);