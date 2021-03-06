import { AppRouter } from '../router/router'
const { Model, Collection } = Backbone;

class ProjectModel extends Model {
    constructor(option) {
        super(option);
        this.urlRoot = '//localhost:7000/project/';
        this.parse = function(response) {
            if (response.status){
                return response.data;
            } else if (response.auth === false){
                new AppRouter().logout();
            }
        }
    }

    defaults() {
        return {
            _id: 13123,
            name_id: '',
            branch: 'Master',
            title: '',
            description: 'Описание',
            start: (new Date()),
            finish: null,
            viewtype: 1,
            tasks: []
        }
    }
}

class ProjectCollection extends Collection {
    constructor() {
        super();
        this.url = '//localhost:7000/project/';
        this.model = ProjectModel;
        this.parse = function(response) {
            if (response.status){
                return response.data;
            } else if (response.auth === false){
                new AppRouter().logout();
            }
        }
    }
}

const Projects = new ProjectCollection;

export { ProjectModel, Projects }