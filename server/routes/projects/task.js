var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var MilestoneModel = require('../../models/milestone.js');
var TaskModel = require('../../models/task.js');

var addTask = function (info, cb) {
    TaskModel.count({parent: info.parent}, function (err, count) {
        if (err) return console.error(err);

        MilestoneModel.findOne({_id: info.parent}, function (err, milestone) {
            if (err) return console.error(err);

            if (milestone) {
                info.name_id = milestone.project_name + '-' + (count + 1);
                info.branch = milestone.project_name + '-' + (count + 1);
                info.start_date = new Date();
                info.finish_date = '2016-10-15';
                info.status = 0;
                info.priority = 0;
                info.description = null;

                var task = new TaskModel(info);
                task.save(function (err, task) {
                    if (err) return cb({status:false});
                    console.log(task.name_id, 'save');
                    return cb({status:true, data: task})
                });
            }
        })
    })
};

router.route('/task/')
    .post(function (req, res) {
        addTask({
            company_id: req.headers.company_id,
            user_id: req.headers.token,
            title: req.body.title,
            parent: req.body.parent_id
        }, function(data){
            if (data.status) res.json({status:true, data:data.data});
            else res.json({status:false});
        });
    })
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