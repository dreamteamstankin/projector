var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var ProjectModel = require('../../models/project.js');
var MilestoneModel = require('../../models/milestone.js');
var TaskModel = require('../../models/task.js');

var addMilestone = function (info, cb) {
    MilestoneModel.count({parent: info.parent}, function (err, count) {
        if (err) return console.error(err);

        ProjectModel.findOne({_id: info.parent}, function (err, project) {
            if (err) return console.error(err);
            if (project) {
                info.project_name = project.name_id;
                info.name_id = project.name_id + '-M-' + (count + 1);
                info.branch = project.name_id + '-M-' + (count + 1);
                info.start = new Date();
                info.finish = null;
                info.description = null;
                info.viewtype = 1;

                var milestone = new MilestoneModel(info);
                milestone.save(function (err, milestone) {
                    if (err) return cb({status:false});
                    cb({status:true, data:milestone});
                });
            }
        })
    })
};

var getMilestone = function (milestone_id, cb) {
    TaskModel.find({parent: milestone_id}, 'id branch title status', function (err, tasks) {
        if (err) return console.error(err);
        MilestoneModel.findOne({_id: milestone_id}, function (err, milestone) {
            if (err) return console.error(err);
            if (milestone) {
                var extendedMilestone = JSON.parse(JSON.stringify(milestone));
                extendedMilestone.tasks = tasks;
                cb(extendedMilestone);
            }
        })
    });
};
var getMilestones = function (cb) {
    var extendedMilestones = [];
    MilestoneModel.find({}, function (err, milestones) {
        if (err) return console.error(err);
        if (milestones) {
            var count = milestones.length;
            milestones.forEach(function (elem, index) {
                getMilestone(elem._id, function(data){
                    extendedMilestones.push(data);
                    if (count-1 == index) {
                        cb(extendedMilestones);
                    }
                });
            });
        }
    });
};

router.route('/milestone/')
    .post(function (req, res) {
        addMilestone({
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
        console.log('Отправлено /milestone/ в проект ' + req.query.project);
        getMilestones(function (data) {
            if (data) {
                res.json({
                    status: true,
                    data: data
                });
            } else {
                res.json({
                    status: false
                });
            }
        });
    });

router.route('/milestone/:id')
    .delete(function(req, res){
        MilestoneModel.findOne({_id:req.params.id}, function(err, milestone){
            if (err) return res.json({status: false});
            if (!milestone) return res.json({status: false});
            milestone.remove();
            res.json({status: true});
        });
    })
    .get(function (req, res) {
        console.log('Отправлено /milestone/ в проект ' + req.query.project);
        getMilestones(function (data) {
            if (data) {
                res.json({
                    status: true,
                    data: data
                });
            } else {
                res.json({
                    status: false
                });
            }
        });
    });

module.exports = router;
