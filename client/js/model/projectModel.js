const { Model, Collection } = Backbone;

class ProjectModel extends Model {
    constructor(option) {
        super(option);
        this.urlRoot = '//localhost:7000/project';
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
        this.url = '//localhost:7000/project';
        this.model = ProjectModel;
    }
}

const Projects = new ProjectCollection;

export { ProjectModel, Projects }