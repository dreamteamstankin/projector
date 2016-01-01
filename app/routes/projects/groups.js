var express = require('express');
var router = express.Router();

router.get('/groups', function(req, res, next) {
    res.render('projects/groups', {
        title: 'Группы',
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
                name: 'Релиз 2.1'
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

module.exports = router;
