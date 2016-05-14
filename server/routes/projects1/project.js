var express = require('express');
var router = express.Router();
var Project = require('../../models/project.js');

router.route('/project/:project')
    .get(function(req, res) {
        Project
            .findOne({
                'name_id': req.params.project
            })
            .populate('tasks')
            .exec(function(err, project) {
                if (err) return res.send(err);
                res.json({
                    pagetitle: project.name_id,
                    project: project
                });
                // res.render('projects/project', {
                //     pagetitle: project.name_id,
                //     project: project,
                //     sections: localeRu
                // });
            })
    });

/*router.get('/groups', function(req, res, next) {
    res.render('projects/groups', {
        project: {
            header: {
                name: 'Погодный сайт',
                url: '/projects/'
            },
            label: [{
                name: '12 / 52 задач',
                color: 'black'
            }, {
                name: 'Релиз 12 авг',
                color: 'black'
            }]
        },
        dashboard: [{
            title: 'Руководитель',
            type: 'link',
            value: {
                url: '#',
                name: 'Ахатов Антон'
            }
        }, {
            title: 'Прогресс',
            type: 'nums',
            values: [{
                url: '#',
                num: '12',
                color: 'orange'
            }, {
                url: '#',
                num: '23',
                color: 'green'
            }, {
                url: '#',
                num: '92',
                color: 'gray'
            }]
        }, {
            title: 'Старт',
            type: 'text',
            values: {
                name: '11.08',
                color: 'black'
            }
        }],
        tasks: [{
            header: [{
                title: 'Номер релиза',
                isAdd: true,
                isMain: true
            }, {
                title: 'Задачи',
                isRight: true
            }, {
                title: 'Старт'
            }, {
                title: 'Релиз'
            }, {
                isEmpty: true
            }],
            body: [{
                color: 'black',
                cells: [{
                    type: 'main',
                    title: '2.1'
                }, {
                    type: 'nums',
                    nums: [{
                        url: '#',
                        num: '12',
                        color: 'orange'
                    }, {
                        url: '#',
                        num: '23',
                        color: 'green'
                    }, {
                        url: '#',
                        num: '92',
                        color: 'gray'
                    }]
                }, {
                    type: 'text',
                    title: '12 апр'
                }, {
                    type: 'text',
                    title: 'Завтра'
                }, {
                    type: 'menu'
                }]
            }, {
                color: 'black',
                cells: [{
                    type: 'main',
                    title: '2.0'
                }, {
                    type: 'nums',
                    nums: [{
                        url: '#',
                        num: '12',
                        color: 'orange'
                    }, {
                        url: '#',
                        num: '23',
                        color: 'green'
                    }, {
                        url: '#',
                        num: '92',
                        color: 'gray'
                    }]
                }, {
                    type: 'text',
                    title: '12 апр'
                }, {
                    type: 'text',
                    title: 'Завтра'
                }, {
                    type: 'menu'
                }]
            }, {
                color: 'black',
                cells: [{
                    type: 'main',
                    title: '1.9'
                }, {
                    type: 'nums',
                    nums: [{
                        url: '#',
                        num: '12',
                        color: 'orange'
                    }, {
                        url: '#',
                        num: '23',
                        color: 'green'
                    }, {
                        url: '#',
                        num: '92',
                        color: 'gray'
                    }]
                }, {
                    type: 'text',
                    title: '12 апр'
                }, {
                    type: 'text',
                    title: 'Завтра'
                }, {
                    type: 'menu'
                }]
            }, {
                color: 'black',
                cells: [{
                    type: 'main',
                    title: '1.8'
                }, {
                    type: 'nums',
                    nums: [{
                        url: '#',
                        num: '12',
                        color: 'orange'
                    }, {
                        url: '#',
                        num: '23',
                        color: 'green'
                    }, {
                        url: '#',
                        num: '92',
                        color: 'gray'
                    }]
                }, {
                    type: 'text',
                    title: '12 апр'
                }, {
                    type: 'text',
                    title: 'Завтра'
                }, {
                    type: 'menu'
                }]
            }]
        }],
        tracker: {
            time: (new Date).getMilliseconds(),
            tasks: [{
                url: '#',
                branch: 'GIS-452',
                type: 'problem',
                time: (new Date).getMilliseconds() + ' ч',
                description: 'Решение проблем с MongoDB'
            }, {
                url: '#',
                branch: 'GIS-452',
                type: 'open',
                time: (new Date).getMilliseconds() + ' ч',
                description: 'Преобразование картинки в pdf'
            }, {
                url: '#',
                branch: 'GIS-452',
                time: (new Date).getMilliseconds() + ' ч',
                description: 'Новая верстка каталога'
            }, {
                url: '#',
                branch: 'GIS-452',
                time: (new Date).getMilliseconds() + ' ч',
                description: 'Изменение цветов геомагнетики'
            }, {
                url: '#',
                branch: 'GIS-452',
                type: 'done',
                time: (new Date).getMilliseconds() + ' ч',
                description: 'Вставить погодные фоны'
            }]
        }
    });
});*/

module.exports = router;
