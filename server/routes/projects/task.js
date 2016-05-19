var express = require('express');
var router = express.Router();

var response = [{
    id: 'GIS-1',
    company_id: 1,
    branch: 'GIS-1',
    title: 'Логирование звездопада',
    description: 'Мнимая единица, пренебрегая деталями, усиливает ролевой математический анализ. Тем не менее, осведомленность о бренде восстанавливает нормальный двойной интеграл. Определение развивает сходящийся ряд.',
    date_start: (new Date()),
    finish_date: (new Date()),
    status: 3,
    type: 1,
    priority: 2,
    component: 'API',
    workflow_id: 2,
    workflow_type: 'Верстка',
    workflow: [{
        title: 'Открыто',
        date_finish: (new Date()),
        user: 1,
        times: 1,
        status: 0
    }, {
        title: 'В работе',
        date_finish: (new Date()),
        user: 1,
        times: 1,
        status: 1
    }, {
        title: 'Код-ревью',
        date_finish: (new Date()),
        user: null,
        status: 2
    }, {
        title: 'Завершено',
        date_finish: null,
        user: null,
        status: 2
    }],
    subtasks: [{
        user: 1,
        completed: true,
        title: 'Кегль очистить историю сделать поменьше. Как и отступ до поиска.',
        date_finish: null,
        count_money: 0,
        count_time: 0
    }, {
        user: 2,
        completed: false,
        title: 'Второстепенная главная задача',
        date_finish: null,
        count_money: 0,
        count_time: 0
    }],
    comments: [{
        id: 1,
        user: 1,
        userName: 'Ахатов',
        created: (new Date()),
        content: 'Не могу дозвониться до телефона'
    }],
    attach: [{
        id: 1,
        type: 'img',
        url: '/img/GIS-1.1.png'
    }],
    branches: [{
        branch: 'GIS-12',
        title: 'Блокируется'
    }, {
        branch: 'GIS-120',
        title: 'Окончание с'
    }]
}, {
    id: 'GIS-2',
    company_id: 1,
    branch: 'GIS-2',
    title: 'Что-то необычное',
    description: 'Мнимая единица, пренебрегая деталями, усиливает ролевой математический анализ. Тем не менее, осведомленность о бренде восстанавливает нормальный двойной интеграл. Определение развивает сходящийся ряд.',
    date_start: (new Date()),
    finish_date: (new Date()),
    status: 3,
    type: 1,
    workflow_type: 2,
    workflow: [{
        title: 'Открыто',
        date_finish: (new Date()),
        user: 1,
        times: 1,
        status: 0
    }, {
        title: 'В работе',
        date_finish: (new Date()),
        user: 1,
        times: 1,
        status: 1
    }, {
        title: 'Код-ревью',
        date_finish: (new Date()),
        user: null,
        status: 2
    }, {
        title: 'Завершено',
        date_finish: null,
        user: null,
        status: 2
    }],
    subtasks: [{
        user: 1,
        completed: false,
        title: 'Кегль очистить историю сделать поменьше. Как и отступ до поиска.',
        date_finish: null,
        count_money: 0,
        count_time: 0
    }, {
        user: 2,
        completed: false,
        title: 'Второстепенная главная задача',
        date_finish: null,
        count_money: 0,
        count_time: 0
    }],
    comments: [{
        id: 1,
        user: 1,
        created: (new Date()),
        content: 'Не могу дозвониться до телефона'
    }],
    attach: [{
        id: 1,
        type: 'img',
        url: '/img/GIS-1.1.png'
    }],
    fields: [{
        component: 'API',
        workflow_type: 'Верстка',
        branch_task: 'GIS-1',
        branch_parent: 'GIS-120'
    }]
}, {
    id: 'GIS-3',
    company_id: 1,
    branch: 'GIS-3',
    title: 'GIS-3',
    description: 'Мнимая единица, пренебрегая деталями, усиливает ролевой математический анализ. Тем не менее, осведомленность о бренде восстанавливает нормальный двойной интеграл. Определение развивает сходящийся ряд.',
    date_start: (new Date()),
    finish_date: (new Date()),
    status: 3,
    type: 1,
    workflow_type: 2,
    workflow: [{
        title: 'Открыто',
        date_finish: (new Date()),
        user: 1,
        times: 1,
        status: 0
    }, {
        title: 'В работе',
        date_finish: (new Date()),
        user: 1,
        times: 1,
        status: 1
    }, {
        title: 'Код-ревью',
        date_finish: (new Date()),
        user: null,
        status: 2
    }, {
        title: 'Завершено',
        date_finish: null,
        user: null,
        status: 2
    }],
    subtasks: [{
        user: 1,
        completed: false,
        title: 'Кегль очистить историю сделать поменьше. Как и отступ до поиска.',
        date_finish: null,
        count_money: 0,
        count_time: 0
    }, {
        user: 2,
        completed: false,
        title: 'Второстепенная главная задача',
        date_finish: null,
        count_money: 0,
        count_time: 0
    }],
    comments: [{
        id: 1,
        user: 1,
        created: (new Date()),
        content: 'Не могу дозвониться до телефона'
    }],
    attach: [{
        id: 1,
        type: 'img',
        url: '/img/GIS-1.1.png'
    }],
    fields: [{
        component: 'API',
        workflow_type: 'Верстка',
        branch_task: 'GIS-1',
        branch_parent: 'GIS-120'
    }]
}, {
    id: 'GIS-4',
    company_id: 1,
    branch: 'GIS-4',
    title: 'GIS-4',
    description: 'Мнимая единица, пренебрегая деталями, усиливает ролевой математический анализ. Тем не менее, осведомленность о бренде восстанавливает нормальный двойной интеграл. Определение развивает сходящийся ряд.',
    date_start: (new Date()),
    finish_date: (new Date()),
    status: 3,
    type: 1,
    workflow_type: 2,
    workflow: [{
        title: 'Открыто',
        date_finish: (new Date()),
        user: 1,
        times: 1,
        status: 0
    }, {
        title: 'В работе',
        date_finish: (new Date()),
        user: 1,
        times: 1,
        status: 1
    }, {
        title: 'Код-ревью',
        date_finish: (new Date()),
        user: null,
        status: 2
    }, {
        title: 'Завершено',
        date_finish: null,
        user: null,
        status: 2
    }],
    subtasks: [{
        user: 1,
        completed: false,
        title: 'Кегль очистить историю сделать поменьше. Как и отступ до поиска.',
        date_finish: null,
        count_money: 0,
        count_time: 0
    }, {
        user: 2,
        completed: false,
        title: 'Второстепенная главная задача',
        date_finish: null,
        count_money: 0,
        count_time: 0
    }],
    comments: [{
        id: 1,
        user: 1,
        created: (new Date()),
        content: 'Не могу дозвониться до телефона'
    }],
    attach: [{
        id: 1,
        type: 'img',
        url: '/img/GIS-1.1.png'
    }],
    fields: [{
        component: 'API',
        workflow_type: 'Верстка',
        branch_task: 'GIS-1',
        branch_parent: 'GIS-120'
    }]
}];


router.route('/task/')
    .get(function (req, res) {
        res.json(response);
    });

router.route('/task/:id')
    .get(function (req, res) {
        res.json(response[0]);
    });

module.exports = router;
