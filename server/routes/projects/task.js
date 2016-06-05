var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var MilestoneModel = require('../../models/milestone.js');
var TaskModel = require('../../models/task.js');

var addTask = function (info) {
    TaskModel.count(function (err, count) {
        if (err) return console.error(err);

        MilestoneModel.findOne({_id: info.parent}, function (err, milestone) {
            if (err) return console.error(err);

            if (milestone) {
                info.name_id = milestone.project_name + '-' + (count + 1);
                info.branch = milestone.project_name + '-' + (count + 1);
                info.start_date = new Date();
                info.finish_date = null;
                info.status = 0;
                info.priority = 0;

                var task = new TaskModel(info);
                task.save(function (err, task) {
                    if (err) return console.error(err);
                    console.log(task.name_id, 'save')
                });
            }
        })
    })
};

var removeTask = function (task_id) {
    TaskModel.remove({_id: task_id}, function (err, tasks) {
        if (err) return console.error(err);
        TaskModel.count(function (err, count) {
            if (err) return console.error(err);
            console.log('Задач:', count)
        })
    });
};

var addWorkflow = function (task_id, info) {
    info.status = 0;
    info.date_finish = null;
    TaskModel.findOne({_id: task_id}, function (err, task) {
        task.workflow.push(info);
        task.save();
        console.log('добавлено');
    });
};
var addSubtasks = function (task_id, info) {
    info.completed = false;
    info.date_finish = null;
    info.count_money = 0;
    info.count_time = 0;
    TaskModel.findOne({_id: task_id}, function (err, task) {
        task.subtasks.push(info);
        task.save();
        console.log('добавлено');
    });
};
var addComments = function (task_id, info) {
    info.created = new Date();
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

//addTask({
//    title: 'Такой вот таск 6',
//    parent: mongoose.Types.ObjectId('5744b32c3f256db0b4437ff0'),
//    company_id: mongoose.Types.ObjectId('57419b50f75c452880252d4c'),
//    user_id: mongoose.Types.ObjectId('57419b625726f138803ea964'),
//    description: 'Тестовое описание вот такое'
//});

//TaskModel.remove({},function(err, tasks) {
//    if (err) return console.error(err);
//    console.log('Задачи:', tasks)
//});

// removeTask('5741eeecaf5a09c483defc8d');

router.route('/task/')
    .get(function (req, res) {
        TaskModel.find(function (err, tasks) {
            if (err) {
                res.json({
                    status: false
                });
                return console.error(err);
            }
            var responseData = (tasks) ? tasks : [];
            res.json({
                status: true,
                data: responseData
            });
        });
    });

router.route('/task/:id')
    .get(function (req, res) {
        TaskModel.findOne({_id: req.params.id}, function (err, task) {
            if (err) return res.json({status: false});
            if (!task) return res.json({status: false});
            return res.json({
                status: true,
                data: task,
                task: task.subtasks.length,
                comment: task.comments.length
            });
        });
    })
    .put(function (req, res) {
        TaskModel.findOne({_id: req.params.id}, function (err, task) {
            if (err) return res.json({status: false});
            if (!task) return res.json({status: false});
            task.comments = req.body.comments;
            task.subtasks = req.body.subtasks;
            task.title = req.body.title;
            task.description = req.body.description;
            task.finish_date = req.body.finish_date;
            task.status = req.body.status;
            //for (var property in req.body) {
            //    task[property] = req.body[property];
            //}
            task.save();
            res.json({status: true});
        });
    })
    .delete(function(req, res){
        TaskModel.findOne({_id:req.params.id}, function(err, task){
            if (err) return res.json({status: false});
            if (!task) return res.json({status: false});
            task.remove();
            res.json({status: true});
        });
    });

module.exports = router;
