var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var MilestoneModel = require('../../models/milestone.js');
var ProjectModel = require('../../models/project.js');

var addProject = function (info ,cb) {
    info.branch = null;
    info.start = new Date();
    info.finish = null;
    info.status = 0;
    info.viewtype = 1;
    info.description = 'Описание';
    var project = new ProjectModel(info);
    project.save(function (err, project) {
        if (err) return cb({status:false});
        console.log(project.name_id, 'save');
        cb({status:true, data:project});
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

router.route('/project/')
    .get(function (req, res) {
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
    })
    .post(function (req, res) {
        addProject({
            name_id: req.body.name_id,
            company_id: req.header.company_id,
            title: req.body.title
        }, function(data){
            if (data.status) res.json({status:true, data:data});
            else res.json({status:false});
        });
    });

router.route('/project/:id')
    .delete(function(req, res){
        ProjectModel.findOne({_id:req.params.id}, function(err, project){
            if (err) return res.json({status: false});
            if (!project) return res.json({status: false});
            project.remove();
            res.json({status: true});
        });
    })
    .get(function (req, res) {
        console.log('Отправлено /project/ в проект');
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
