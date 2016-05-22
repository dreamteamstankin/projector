var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var Schema = mongoose.Schema;



/* Task */
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

var TaskModel = mongoose.model('Task', taskSchema);

var addTask = function(info) {
    TaskModel.count(function(err, count) {
        if (err) return console.error(err);

        MilestoneModel.findOne({ _id: info.parent }, function(err, milestone) {
            if (err) return console.error(err);

            if (milestone) {
                info.name_id = milestone.project_name + '-' + (count + 1);
                info.branch = milestone.project_name + '-' + (count + 1);

                task = new TaskModel(info);
                task.save(function(err, task) {
                    if (err) return console.error(err);
                    console.log(task.name_id, 'save')
                });
            }
        })
    })
};

var removeTask = function(task_id) {
    TaskModel.remove({_id:task_id}, function(err, tasks) {
        if (err) return console.error(err);
        TaskModel.count(function(err, count) {
            if (err) return console.error(err);
            console.log('Задач:', count)
        })
    });
};

var addWorkflow = function (task_id, info) {
    TaskModel.findOne({_id: task_id}, function (err, task) {
        task.workflow.push(info);
        task.save();
        console.log('добавлено');
    });
};
var addSubtasks = function (task_id, info) {
    TaskModel.findOne({_id: task_id}, function (err, task) {
        task.subtasks.push(info);
        task.save();
        console.log('добавлено');
    });
};
var addComments = function (task_id, info) {
    TaskModel.findOne({_id: task_id}, function (err, task) {
        task.comments.push(info);
        task.save();
        console.log('добавлено');
    });
};

// addWorkflow('5741ef4eda7910e18367907d', {
//     title: 'Поток',
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// });

// addSubtasks('5741f55f15294d8f847c4590', {
//     title: 'Подзадачка',
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// });

// addComments('5741f55f15294d8f847c4590', {
//     title: 'Комментарий',
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// });

// addTask({
//     title: 'Такой вот таск',
//     parent: mongoose.Types.ObjectId('5741eeb4c25d25b883ba735d'),
//     company_id: mongoose.Types.ObjectId('57419b50f75c452880252d4c'),
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// });

// TaskModel.find(function(err, tasks) {
//     if (err) return console.error(err);
//     console.log('Задачи:', tasks)
// })

// removeTask('5741eeecaf5a09c483defc8d');