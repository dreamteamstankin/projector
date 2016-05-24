const { Model, Collection } = Backbone;

class ProjectModel extends Model {
    constructor(option) {
        super(option);
        this.urlRoot = '//localhost:7000/project';
        this.parse = function(response) {
            if (response.status){
                return response.data;
            }
        }
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
        this.parse = function(response) {
            if (response.status){
                console.log(response.data);
                return response.data;
            }
        }
    }
}

const Projects = new ProjectCollection;

export { ProjectModel, Projects }