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
        this.events = {
            'click .js_project_remove': 'removeProject'
        };
        View.apply(this);
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

    removeProject(e){
        var id = $(e.currentTarget).data('project-id');
        var project = new ProjectModel({id: id});
        project.destroy({
            headers: {
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            },
            success: function(data){
                $(`.js_project[data-project-id="${id}"]`).remove();
            }
        })
    }

    render() {
        var projects = [];
        Projects.each(function (project) {
            projects.push(project.attributes);
        });
        var data = _.extend({projects: projects}, {
            finish: '2016-10-15'
        });
        $(this.el).html(this.template(data));
    }
}
export { ProjectsView }