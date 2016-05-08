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
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Инициация',
        url: 'project/PY/milestone/1',
        status: 1
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Планирование',
        url: 'project/PY/milestone/1',
        status: 2
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Исполнение',
        url: 'project/PY/milestone/1',
        status: 3
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Мониторинг и упраавление',
        url: 'project/PY/milestone/1',
        status: 4
    }, {
        id: 'GIS-6',
        branch: 'GIS-6',
        title: 'Завершение',
        url: 'project/PY/milestone/1',
        status: 5
    }]
}));

export { ProjectModel, Projects }