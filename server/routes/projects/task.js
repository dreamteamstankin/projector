var express = require('express');
var router = express.Router();
var MilestoneModel = require('../../models/milestone.js');
var TaskModel = require('../../models/task.js');

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



var addTask = function(info) {
    TaskModel.count(function(err, count) {
        if (err) return console.error(err);

        MilestoneModel.findOne({ _id: info.parent }, function(err, milestone) {
            if (err) return console.error(err);

            if (milestone) {
                info.name_id = milestone.project_name + '-' + (count + 1);
                info.branch = milestone.project_name + '-' + (count + 1);

                var task = new TaskModel(info);
                task.save(function(err, task) {
                    if (err) return console.error(err);
                    console.log(task.name_id, 'save')
                });
            }
        })
    })
};

var removeTask = function(task_id) {
    TaskModel.remove({_id:task_id}, function(err, tasks) {
        if (err) return console.error(err);
        TaskModel.count(function(err, count) {
            if (err) return console.error(err);
            console.log('Задач:', count)
        })
    });
};

var addWorkflow = function (task_id, info) {
    TaskModel.findOne({_id: task_id}, function (err, task) {
        task.workflow.push(info);
        task.save();
        console.log('добавлено');
    });
};
var addSubtasks = function (task_id, info) {
    TaskModel.findOne({_id: task_id}, function (err, task) {
        task.subtasks.push(info);
        task.save();
        console.log('добавлено');
    });
};
var addComments = function (task_id, info) {
    TaskModel.findOne({_id: task_id}, function (err, task) {
        task.comments.push(info);
        task.save();
        console.log('добавлено');
    });
};

// addWorkflow('5741ef4eda7910e18367907d', {
//     title: 'Поток',
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// });

// addSubtasks('5741f55f15294d8f847c4590', {
//     title: 'Подзадачка',
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// });

// addComments('5741f55f15294d8f847c4590', {
//     title: 'Комментарий',
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// });

// addTask({
//     title: 'Такой вот таск',
//     parent: mongoose.Types.ObjectId('5741eeb4c25d25b883ba735d'),
//     company_id: mongoose.Types.ObjectId('57419b50f75c452880252d4c'),
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// });

// TaskModel.find(function(err, tasks) {
//     if (err) return console.error(err);
//     console.log('Задачи:', tasks)
// })

// removeTask('5741eeecaf5a09c483defc8d');

router.route('/task/')
    .get(function (req, res) {
        res.json(response);
    });

router.route('/task/:id')
    .get(function (req, res) {
        res.json(response[0]);
    });

module.exports = router;
