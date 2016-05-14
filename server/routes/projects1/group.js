var express = require('express');
var router = express.Router();
// var Group = require('../../models/group.js');

router.route('/group')
    .get(function(req, res) {
        // Group.remove({}, function(err, Group) {
        //     if (err) {
        //         return res.send(err);
        //     }
        //     res.json({
        //         message: 'Successfully deleted all'
        //     });
        // });
        Group.find(function(err, Groups) {
            if (err) {
                return res.send(err);
            }
            res.json(Groups);
        });

        // var newGroup = {
        //     prefix_id: 'TEST-1',
        //     user_id: '568954c2a4810f38d329a20e',
        //     title: 'Тестовая группа',
        //     description: 'Тестоваое описание',
        //     start_date: new Date,
        //     release_date: null,
        //     status: 0,
        //     tasks: []
        // }
        // var group = new Group(newGroup);
        // group.save(function(err) {
        //     if (err) {
        //         return res.send(err);
        //     }
        //     Group.find(function(err, group) {
        //         if (err) {
        //             return res.send(err);
        //         }
        //         res.json(group);
        //     });
        // });
    })



/*
router.get('/group', function(req, res, next) {
    res.render('projects/group', {
        title: 'Группа',
        level: 1,
        sections: {
            description: 'Описание',
            attach: 'Прикрепленные файлы'
        },
        navigation: {
            menu: [{
                name: 'Проекты',
                url: '#',
                selected: true
            }, {
                name: 'Календарь',
                url: '#'
            }, {
                name: 'Финансы',
                url: '#'
            }, {
                name: 'Риски',
                url: '#'
            }, {
                name: 'Отчеты',
                url: '#'
            }, {
                name: 'Документация',
                url: '#'
            }],
            user: {
                pic: '/',
                name: 'Антон Ахатов',
                access: 1
            }
        },
        description: 'Подробная информация о текущей погоде и детальный прогноз всегда под рукой, где бы вы ни находились.',
        header: {
            title: [{
                name: 'Релиз 2.1',
                url: '/groups/'
            }, {
                name: 'Правки по верстке'
            }]
        },
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
        menu: [{
            name: 'Задачи',
            url: '#',
            selected: true
        }, {
            name: 'Время',
            url: '#'
        }, {
            name: 'Финансы',
            url: '#'
        }, {
            name: 'Отчеты',
            url: '#'
        }, {
            name: 'Документации',
            url: '#'
        }],
        attach: [{
            type: 'img',
            url: '#',
            src: '/img/attach.png',
            alt: 'Картинка 1'
        }, {
            type: 'img',
            url: '#',
            src: '/img/attach.png',
            alt: 'Картинка 2'
        }],
        dashboard: [{
            title: 'Исполнитель',
            type: 'link',
            value: {
                url: '#',
                name: 'Ахатов Антон'
            }
        }, {
            title: 'Ветка',
            type: 'text',
            values: {
                name: 'GIS-624',
                color: 'black'
            }
        }, {
            title: 'Старт',
            type: 'text',
            values: {
                name: '29.09',
                color: 'black'
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
        }],
        tasks: [{
            header: [{
                title: 'Фронтенд',
                isAdd: true,
                isMain: true
            }, {}, {
                title: '',
                isRight: true
            }, {
                title: 'Назначено'
            }, {}],
            body: [{
                color: 'black',
                url: '#',
                cells: [{
                    type: 'main',
                    title: '2.1'
                }, {
                    type: 'icon',
                    state: 'problem'
                }, {
                    type: 'text',
                    title: 'GIS-512'
                }, {
                    type: 'text',
                    title: 'Антон Ахатов'
                }, {
                    type: 'menu'
                }]
            }, {
                isGroup: true,
                color: 'black',
                url: '#',
                cells: [{
                    type: 'main',
                    title: '2.0'
                }, {
                    type: 'icon',
                    state: 'done'
                }, {
                    isRight: true,
                    type: 'nums',
                    nums: [{
                        url: '#',
                        num: '1',
                        color: 'black'
                    }, {
                        url: '#',
                        num: '4',
                        color: 'gray'
                    }]
                }, {
                    type: 'text',
                    title: 'Антон Ахатов'
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
});
*/
module.exports = router;
