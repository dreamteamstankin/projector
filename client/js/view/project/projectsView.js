import { TasksView } from './tasksView'
import { ProjectModel, Projects  } from '../../model/projectModel'

const { View } = Backbone;
const ProjectsTemplate = require('../../../templates/project/projects.hbs');

class ProjectsView extends View {
    constructor() {
        super();
        var self = this;
        this.el = $('#page');
        this.template = ProjectsTemplate;
        this.data = {
            projects: []
        };
        Projects.each(function (project) {
            self.data.projects.push(project.attributes);
        });
        this.render();
    }

    render() {
        console.log('render projects');
        this.el.html(this.template(this.data));
    }
}

export { ProjectsView }