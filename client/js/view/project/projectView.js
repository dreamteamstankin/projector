import { TasksView } from './tasksView'
import { ProjectModel, Projects  } from '../../model/projectModel'

const { View } = Backbone;
const PageTemplate = require('../../../templates/project/page.hbs');
const ProjectTemplate = require('../../../templates/project/project.hbs');

class ProjectView extends View {
    constructor(id) {
        super();
        this.el = $('#page');
        this.template = PageTemplate;
        this.data = Projects.findWhere({id: id}).attributes;
        this.render();
    }
    render() {
        this.el.html(this.template(this.data));
        switch (this.data.viewtype) {
            case 1:
                new TasksView(ProjectTemplate, this.data);
                break;
            default:
                console.warn();
        }
    }
}

export { ProjectView }