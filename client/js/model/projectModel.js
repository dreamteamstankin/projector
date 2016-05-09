const { Model, Collection } = Backbone;

class ProjectModel extends Model {
    constructor(option) {
        super(option);
    }

    defaults() {
        return {
            id: 'GIS',
            branch: 'Master',
            title: 'Погодный сайт',
            description: 'Жизненный цикл',
            start: (new Date()),
            finish: (new Date()),
            viewtype: 1,
            tasks: []
        }
    }
}

class ProjectCollection extends Collection {
    constructor() {
        super();
        this.model = ProjectModel;
    }
}

const Projects = new ProjectCollection;

Projects.add(new ProjectModel({
    id: 'GIS',
    branch: 'Master',
    title: 'Погодный сайт',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
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
}));

export { ProjectModel, Projects }