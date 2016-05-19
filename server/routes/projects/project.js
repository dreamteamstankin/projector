var express = require('express');
var router = express.Router();

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
},{
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


router.route('/project/')
    .get(function(req, res) {
        res.json(response);
    });

router.route('/project/:task')
    .get(function(req, res) {
        res.json(response[0]);
    });

module.exports = router;
