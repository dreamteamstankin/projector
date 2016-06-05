import { Storage } from '../../helpers/storage'
import { TasksView } from './tasksView'
import { ProjectModel, Projects  } from '../../model/projectModel'


const { View } = Backbone;
const ProjectsTemplate = require('../../../templates/project/projects.hbs');

class ProjectsView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = ProjectsTemplate;
    }

    initialize(){
        var self = this;
        Projects.fetch({
            headers: {
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            },
            success: function(){
                self.render();
            }
        });
    }

    render() {
        var projects = [];
        Projects.each(function (project) {
            projects.push(project.attributes);
        });
        $(this.el).html(this.template({projects: projects}));
    }
}

export { ProjectsView }