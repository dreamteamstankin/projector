var express = require('express');
var router = express.Router();
var Task = require('../../models/task.js');

router.route('/task/:task')
    .get(function(req, res) {
        res.json({
            'привет': 'мир!'
        });
        //Task
        //    .findOne({
        //        'name_id': req.params.task
        //    })
        //    .exec(function(err, task) {
        //        if (err) return res.send(err);
        //        res.json({
        //            pagetitle: task.name_id,
        //            project: {
        //                title: 'Погодный сайт',
        //                url:'/project/' + task.name_id.split('-')[0],
        //                level: 0
        //            },
        //            breadcrumbs: [{
        //                name: 'Погодный сайт',
        //                url:'/project/' + task.name_id.split('-')[0],
        //            },{
        //                name: task.title
        //            }],
        //            task: task
        //        });
        //    })
    });

module.exports = router;
