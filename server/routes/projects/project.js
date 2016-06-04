var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var MilestoneModel = require('../../models/milestone.js');
var ProjectModel = require('../../models/project.js');

var addProject = function (info) {
    info.branch = null;
    info.start = new Date();
    info.finish = null;
    info.status = 0;
    info.viewtype = 1;
    var project = new ProjectModel(info);
    project.save(function (err, project) {
        if (err) return console.error(err);
        console.log(project.name_id, 'save');
    });
};

var getProject = function (milestone_id, cb) {
    MilestoneModel.find({parent: milestone_id}, 'name_id id branch title', function (err, milestones) {
        if (err) return console.error(err);
        if (milestones) {
            ProjectModel.findOne({_id: milestone_id}, function (err, projects) {
                if (err) return console.error(err);
                if (projects) {
                    var extendedProject = JSON.parse(JSON.stringify(projects));
                    extendedProject.tasks = milestones;
                    cb(extendedProject);
                }
            });
        }
    });
};
var getProjects = function (cb) {
    var extendedProjects = [];
    ProjectModel.find({}, function (err, projects) {
        if (err) return console.error(err);
        if (projects) {
            var count = projects.length;
            projects.forEach(function (elem, index) {
                getProject(elem._id, function (data) {
                    extendedProjects.push(data);
                    if (count - 1 == index) {
                        cb(extendedProjects);
                    }
                });
            });
        }
    });
};

var removeProject = function (project_id) {
    ProjectModel.remove({_id: project_id}, function (err, projects) {
        if (err) return console.error(err);
        ProjectModel.count(function (err, count) {
            if (err) return console.error(err);
            console.log('Проектов:', count)
        })
    });
};

//getProject('5741d5b3d1156728812f0961', function (data) {
//    console.log(data);
//});

//addProject({
//    name_id: 'GIS',
//    company_id: mongoose.Types.ObjectId('57419b50f75c452880252d4c'),
//    title: 'Погодный сайт',
//    description: 'Описание'
//});

//ProjectModel.find(function(err, projects) {
//    if (err) return console.error(err);
//    console.log('Проекты', projects);
//});

// ProjectModel.remove({}, function(err, projects) {
//     if (err) return console.error(err);
//     ProjectModel.count(function(err, count) {
//         if (err) return console.error(err);
//         console.log('Проектов:', count)
//     })
// });

router.route('/project/')
    .get(function (req, res) {
        console.log('Отправлено /project/ в проект ' + req.query.project);
        getProjects(function (data) {
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

router.route('/project/:task')
    .get(function (req, res) {
        console.log('Отправлено /project/ в проект ' + req.query.project);
        getProjects(function (data) {
            if (data) {
                res.json({
                    status: true,
                    data: data[0]
                });
            } else {
                res.json({
                    status: false
                });
            }
        });
    });

module.exports = router;
