import { Storage } from '../../helpers/storage'
import { TasksView } from './tasksView'
import { ProjectModel, Projects  } from '../../model/projectModel'

const { View } = Backbone;
const PageTemplate = require('../../../templates/project/page.hbs');
const ProjectTemplate = require('../../../templates/project/project.hbs');

class ProjectView extends View {
    constructor(id) {
        super(id);
        this.el = $('#page');
        this.template = PageTemplate;
    }

    initialize(id){
        var self = this;
        var project = new ProjectModel({id: id});
        project.fetch({
            data: $.param({
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            }),
            success: function () {
                Projects.add(project);
                self.data = project.attributes;
                self.render();
            }
        });
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