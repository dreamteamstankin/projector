const { Model, Collection } = Backbone;

class ProjectModel extends Model {
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
class ProjectCollection extends Collection {
    constructor() {
        super();
        this.model = ProjectModel;
    }
}

export { ProjectModel, ProjectCollection }