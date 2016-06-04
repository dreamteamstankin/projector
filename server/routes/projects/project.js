var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var MilestoneModel = require('../../models/milestone.js');
var ProjectModel = require('../../models/project.js');

var response = [{
    id: 'GIS',
    branch: 'Master',
    title: 'Погодный сайт',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    company_id: 1,
    viewtype: 1,
    tasks: [{
        id: 'GIS-M-1',
        branch: 'GIS-M-1',
        title: 'Инициация',
        status: 1
    }, {
        id: 'GIS-M-2',
        branch: 'GIS-M-2',
        title: 'Планирование',
        status: 2
    }, {
        id: 'GIS-M-3',
        branch: 'GIS-M-3',
        title: 'Исполнение',
        status: 3
    }, {
        id: 'GIS-M-4',
        branch: 'GIS-M-4',
        title: 'Мониторинг и упраавление',
        status: 4
    }, {
        id: 'GIS-M-5',
        branch: 'GIS-M-5',
        title: 'Завершение',
        status: 5
    }]
}, {
    id: 'Test',
    branch: 'Master',
    title: 'Другой сайт',
    description: 'Воздухосодержание продуцирует гистерезис ОГХ. По мнению ведущих маркетологов, волна увлажняет ион-селективный продуктовый ассортимент, опираясь на опыт западных коллег. ',
    start: (new Date()),
    finish: (new Date()),
    company_id: 1,
    viewtype: 1,
    tasks: [{
        id: 'TEST-M-1',
        branch: 'TEST-M-1',
        title: 'Инициация',
        status: 1
    }, {
        id: 'TEST-M-2',
        branch: 'TEST-M-2',
        title: 'Планирование',
        status: 2
    }, {
        id: 'TEST-M-3',
        branch: 'TEST-M-3',
        title: 'Исполнение',
        status: 3
    }, {
        id: 'TEST-M-4',
        branch: 'TEST-M-4',
        title: 'Мониторинг и упраавление',
        status: 4
    }, {
        id: 'TEST-M-5',
        branch: 'TEST-M-5',
        title: 'Завершение',
        status: 5
    }]
}, {
    id: 'Test2',
    branch: 'Master',
    title: 'Cайт',
    description: 'Газ спорадически вращает бурозём. Как показывает практика режимных наблюдений в полевых условиях, сервисная стратегия возбуждает вихрь.',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'TEST-M-1',
        branch: 'TEST-M-1',
        title: 'Инициация',
        status: 1
    }, {
        id: 'TEST-M-2',
        branch: 'TEST-M-2',
        title: 'Планирование',
        status: 2
    }, {
        id: 'TEST-M-3',
        branch: 'TEST-M-3',
        title: 'Исполнение',
        status: 3
    }, {
        id: 'TEST-M-4',
        branch: 'TEST-M-4',
        title: 'Мониторинг и упраавление',
        status: 4
    }, {
        id: 'TEST-M-5',
        branch: 'TEST-M-5',
        title: 'Завершение',
        status: 5
    }]
}];

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
                    data: response[0]
                });
            } else {
                res.json({
                    status: false
                });
            }
        });
    });

module.exports = router;
