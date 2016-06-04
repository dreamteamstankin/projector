import { AppRouter } from '../router/router'
const { Model, Collection } = Backbone;

class TaskModel extends Model {
    constructor(option) {
        super(option);
        this.urlRoot = '//localhost:7000/task';
        this.parse = function(response) {
            if (response.status){
                return response.data;
            }
        }
    }
    defaults() {
        return {
            id: 'GIS-1',
            branch: 'GIS-1',
            title: 'Логирование звездопада',
            description: 'Мнимая единица',
            date_start: (new Date()),
            finish_date: (new Date()),
            status: 3,
            type: 1,
            workflow_type: 2,
            workflow: [],
            subtasks: [],
            comments: [],
            attach: [],
            fields: []
        }
    }
}

class TaskCollection extends Collection {
    constructor() {
        super();
        this.url = '//localhost:7000/task';
        this.model = TaskModel;
        this.parse = function(response) {
            if (response.status){
                return response.data;
            } else if (response.auth === false){
                new AppRouter().logout();
            }
        }
    }
}

const Tasks = new TaskCollection;

export { TaskModel, Tasks }