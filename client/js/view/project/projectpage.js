var ProjectTemplate = require('../../../templates/project/page.hbs');

const { View } = Backbone;


const milestone = {
    id: 1,
    name_id: 'GIS-0',
    title: 'Релиз 2.1',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    tasks: [{
        name_id: 'GIS-2',
        title: 'Логирование',
        type: 1,
        status: 1,
        completed: false
    }, {
        name_id: 'GIS-3',
        title: 'Карта сайта',
        type: 1,
        status: 2,
        completed: false
    }, {
        name_id: 'GIS-4',
        title: 'Масштабирование при зуме',
        type: 1,
        status: 3,
        completed: false
    }, {
        name_id: 'GIS-5',
        title: 'Исправление ошибки с температурой',
        type: 1,
        status: 4,
        completed: false
    }, {
        name_id: 'GIS-6',
        title: 'Мелкие правки по верстке',
        type: 1,
        status: 5,
        completed: false
    }]
};
const task = {
    id: 1,
    name_id: 'GIS-1',
    title: 'Логирование звездопада',
    description: 'Мнимая единица, пренебрегая деталями, усиливает ролевой математический анализ. Тем не менее, осведомленность о бренде восстанавливает нормальный двойной интеграл. Определение развивает сходящийся ряд.',
    date_start: (new Date()),
    finish_date: (new Date()),
    status: 3,
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
};


class ProjectPageView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = ProjectTemplate;
        this.render();
    }
    render() {
        this.el.html(this.template(milestone));
    }
}

export { ProjectPageView }