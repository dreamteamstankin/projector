var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('../components/db')

// var Project = require('project.js')
// var Attach = require('attach.js')
// var Comment = require('comment.js')

var taskSchema = new Schema({
    name_id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    user: {
        url: String,
        name: String
    },
    title: String,
    description: String,
    start_date: Date,
    state: Number,
    attaches: [{
        type: Schema.Types.ObjectId,
        ref: 'Attach'
    }],
    subtasks: [{
        type: Schema.Types.ObjectId,
        ref: '_Task'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

createTask = function() {
    Task.count(function(err, count) {
        var newTask = {
            name_id: 'TEST' + '-' + count,
            url: '/task/' + 'TEST' + '-' + count,
            user: {
                url: '/profile/' + 'gcor',
                name: 'Антон Ахатов'
            },
            title: 'Тестовый проект ' + count,
            description: 'Тестовое описание ' + count,
            start_date: new Date,
            state: 0,
            attaches: [],
            subtasks: [],
            comments: []
        }
        var task = new Task(newTask);
        task.save(function(err) {
            Task.find(function(err, tasks) {
                if (err) console.log(err);
                console.log(task.name_id + ' added');
            });
        });
        Project.findOneAndUpdate({
                name_id: 'TEST'
            }, {
                $push: {
                    tasks: task
                }
            }, {
                safe: true,
                upsert: true
            },
            function(err, model) {
                if (err) console.log(err);
            }
        );
    })
}
dropTask = function() {
    Task.remove({}, function(err, Task) {
        console.log('Successfully deleted all');
    });
}
// createTask() 
// dropTask()

module.exports = mongoose.model('_Task', taskSchema);