var express = require('express');
var router = express.Router();
var MilestoneModel = require('../../models/milestone.js');

var response = [{
    id: 'GIS-M-1',
    branch: 'GIS-M-1',
    title: 'Погодный сайт',
    company_id: 1,
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
}, {
    id: 'GIS-M-2',
    branch: 'GIS-M-2',
    title: 'Погодный сайт',
    company_id: 1,
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
}, {
    id: 'GIS-M-3',
    branch: 'GIS-M-3',
    title: 'Погодный сайт',
    company_id: 1,
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
}, {
    id: 'GIS-M-4',
    branch: 'GIS-M-4',
    title: 'Погодный сайт',
    company_id: 1,
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
}, {
    id: 'GIS-M-5',
    branch: 'GIS-M-5',
    title: 'Погодный сайт',
    company_id: 1,
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
}];



var addMilestone = function(info) {
    MilestoneModel.count(function(err, count) {
        if (err) return console.error(err);

        ProjectModel.findOne({ _id: info.parent }, function(err, project) {
            if (err) return console.error(err);
            if (project) {
                info.project_name = project.name_id;
                info.name_id = project.name_id + '-M-' + (count + 1);
                info.branch = project.name_id + '-M-' + (count + 1);

                milestone = new MilestoneModel(info);
                milestone.save(function(err, milestone) {
                    if (err) return console.error(err);
                    console.log(milestone.name_id, 'save')
                });
            }
        })
    })
};

// addMilestone({
//     title: 'Релиз — веха',
//     parent: mongoose.Types.ObjectId('5741d5b3d1156728812f0961'),
//     company_id: mongoose.Types.ObjectId('57419b50f75c452880252d4c'),
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// })

var removeMilestone = function(milestone_id) {
    MilestoneModel.remove({ _id: milestone_id }, function(err, milestones) {
        if (err) return console.error(err);
        MilestoneModel.count(function(err, count) {
            if (err) return console.error(err);
            console.log('Вех:', count)
        })
    });
};

// removeMilestone('5741eeb4c25d25b883ba735d');

var getMilestones = function(milestone_id, cb) {
    TaskModel.find({parent: milestone_id}, 'id branch title', function(err, tasks) {
        if (err) return console.error(err);
        MilestoneModel.findOne({_id: milestone_id}, function (err, melistone) {
            if (err) return console.error(err);
            var extendedMilestone = JSON.parse(JSON.stringify(melistone));
            extendedMilestone.tasks = tasks;
            cb(extendedMilestone);
        })
    });
};

//getMilestones('5741eeb4c25d25b883ba735d', function (data) {
//    console.log(data);
//});

// MilestoneModel.find(function(err, milestones) {
//     if (err) return console.error(err);
//     console.log('Вехи', milestones);
// });

// MilestoneModel.remove({}, function(err, milestones) {
//     if (err) return console.error(err);
//     MilestoneModel.count(function(err, count) {
//         if (err) return console.error(err);
//         console.log('Проектов:', count)
//     })
// });


router.route('/milestone/')
    .get(function(req, res) {
        console.log('Отправлено /milestone/ в проект ' + req.query.project);
        res.json(response);
    });

module.exports = router;
