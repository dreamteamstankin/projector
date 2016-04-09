const { Model, View, Collection, Router } = Backbone;

const milestone = {
    id: 1,
    name_id: 'GIS-0',
    title: 'Релиз 2.1',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
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

class MilestoneModel extends Model {
    defaults() {
        return {
            id: 1,
            name_id: 'GIS-0',
            title: 'Релиз 2.1',
            description: 'Описание',
            tasks: []
        }
    }
}
class MilestoneCollection extends Collection {
    constructor() {
        super();
        this.model = MilestoneModel;
    }
}

class MilestoneView extends View {
    constructor() {
        super();
        this.el = $('#page');
    }
}

class TodoView extends View {
    constructor() {
        super();
        //this.tagName = 'li';
        //this.template = _.template($('#item-template').html());
        //this.input = '';
        //this.events = {
        //    'click .toggle': 'toggleCompleted',
        //    'dblclick label': 'edit',
        //    'click .destroy': 'clear',
        //    'keypress .edit': 'updateOnEnter',
        //    'blur .edit': 'close'
        //};
        //
        //this.listenTo(this.model, 'change', this.render);
        //this.listenTo(this.model, 'destroy', this.remove);
        //this.listenTo(this.model, 'visible', this.toggleVisible);
    }
    render() {
        //this.$el.html(this.template(this.model.toJSON()));
        //this.$el.toggleClass('completed', this.model.get('completed'));
        //this.toggleVisible();
        //this.input = this.$('.edit');
        return this;
    }

}


class AppView extends View {
    constructor() {
        super();
        this.el = $('#page');
        //System.import('./templates/project/milestone.hbs!text')
        this.template =  Handlebars.compile();
        this.render();
        //this.setElement($('#todoapp'), true);
        //this.statsTemplate = _.template($('#stats-template').html());
        //this.events = {
        //    'keypress #new-todo': 'createOnEnter',
        //    'click #clear-completed': 'clearCompleted',
        //    'click #toggle-all': 'toggleAllComplete'
        //};
        //this.allCheckbox = this.$('#toggle-all')[0];
        //this.$input = this.$('#new-todo');
        //this.$footer = this.$('#footer');
        //this.$main = this.$('#main');
        //
        //this.listenTo(Todos, 'add', this.addOne);
        //this.listenTo(Todos, 'reset', this.addAll);
        //this.listenTo(Todos, 'change:completed', this.filterOne);
        //this.listenTo(Todos, 'filter', this.filterAll);
        //this.listenTo(Todos, 'all', this.render);
        //
        //Todos.fetch();
    }
    render() {
        this.el.html(this.template({
            title: "Привет"
        }));

        //var completed = Todos.completed().length;
        //var remaining = Todos.remaining().length;
        //
        //if (Todos.length) {
        //    this.$main.show();
        //    this.$footer.show();
        //    this.$footer.html(
        //        this.statsTemplate({
        //            completed, remaining
        //        })
        //    );
        //    this.$('#filters li a')
        //        .removeClass('selected')
        //        .filter('[href="#/' + (TodoFilter || '') + '"]')
        //        .addClass('selected');
        //} else {
        //    this.$main.hide();
        //    this.$footer.hide();
        //}
        //this.allCheckbox.checked = !remaining;
    }
}



class AppRouter extends Router {
    constructor() {
        super({
            routes: {
                "": "index",
                "/projects": "projects",
                "/project/:projectId/": "project",
                "/task/:taskId/": "task",
                "/project/:projectId/task/:taskId/": "task",
                "/docs/": "docs",
                "/article/:articleId": "article",
                "/profile/": "profile"
            }
        });
    }

    index() {
        //console.log('index')
    }

    projects(projectId) {
        //console.log('projects', projectId)
    }

    task(projectId, taskId) {
        //console.log('task', projectId, taskId)
    }

    docs() {
        //console.log('docs')
    }

    article(articleId) {
        //console.log('article', articleId)
    }

    profile() {
        //console.log('profile')
    }
}


$(() => {
    const App = {};
    App.Router = new AppRouter();
    App.MilestoneCollection = new MilestoneCollection();
    App.MilestoneCollection.add(milestone);


    App.AppView = new AppView();

    Backbone.history.start();
});
