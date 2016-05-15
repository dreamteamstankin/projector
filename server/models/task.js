var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Project = require('projectModel.js')
// var Attach = require('attach.js')
// var Comment = require('comment.js')

var taskSchema = new Schema({
    name_id: {
        type: String,
        required: true,
        unique: true
    },
    project_id: String,
    branch: {
        current: String,
        parent: String,
        block: Array
    },
    title: String,
    description: String,
    user: String,
    date_start: Date,
    finish_start: Date,
    status: Number,
    workflow: [{
        type: Schema.Types.ObjectId,
        ref: 'Workflow'
    }],
    attaches: [{
        type: Schema.Types.ObjectId,
        ref: 'Attach'
    }],
    subtasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Subtask'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

var createTask = function() {
    Task.count(function(err, count) {
        var newTask = {
            name_id: 'TEST' + '-' + count,
            project_id: String,
            branch: {
                current: 'TEST' + '-' + count,
                parent: null,
                blocked: null
            },
            title: 'Тестовый проект ' + count,
            description: 'Тестовое описание ' + count,
            user: 'Ахатов',
            date_start: new Date,
            finish_start: new Date,
            status: 0,
            workflow: [],
            attaches: [],
            subtasks: [],
            comments: []
        };

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
};

var dropTask = function() {
    Task.remove({}, function(err, task) {
        console.log('Successfully deleted all');
    });
};
// createTask() 
// dropTask()

module.exports = mongoose.model('Task', taskSchema);