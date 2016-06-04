var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var ProjectModel = require('../../models/project.js');
var MilestoneModel = require('../../models/milestone.js');
var TaskModel = require('../../models/task.js');

var addMilestone = function (info) {
    MilestoneModel.count(function (err, count) {
        if (err) return console.error(err);

        ProjectModel.findOne({_id: info.parent}, function (err, project) {
            if (err) return console.error(err);
            if (project) {
                info.project_name = project.name_id;
                info.name_id = project.name_id + '-M-' + (count + 1);
                info.branch = project.name_id + '-M-' + (count + 1);
                info.start = new Date();
                info.finish = null;
                info.viewtype = 1;

                var milestone = new MilestoneModel(info);
                milestone.save(function (err, milestone) {
                    if (err) return console.error(err);
                    console.log(milestone.name_id, 'save')
                });
            }
        })
    })
};

//addMilestone({
//    title: 'Релиз — веха',
//    parent: mongoose.Types.ObjectId('5744b2459b7fa829b42cc4d9'),
//    company_id: mongoose.Types.ObjectId('5744b1d035f581ebb3e40fc5'),
//    user_id: mongoose.Types.ObjectId('5744b2154a081212b428a7d8'),
//    description: 'Описание'
//});

var removeMilestone = function (milestone_id) {
    MilestoneModel.remove({_id: milestone_id}, function (err, milestones) {
        if (err) return console.error(err);
        if (milestones) {
            MilestoneModel.count(function (err, count) {
                if (err) return console.error(err);
                console.log('Вех:', count)
            })
        }
    });
};

// removeMilestone('5741eeb4c25d25b883ba735d');

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

//MilestoneModel.find(function(err, milestones) {
//    if (err) return console.error(err);
//    console.log('Вехи', milestones);
//});

// MilestoneModel.remove({}, function(err, milestones) {
//     if (err) return console.error(err);
//     MilestoneModel.count(function(err, count) {
//         if (err) return console.error(err);
//         console.log('Проектов:', count)
//     })
// });


router.route('/milestone/')
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
