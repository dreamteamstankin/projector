import { ProjectTasksView } from './projectTasks'
import { ProjectModel, Projects  } from '../../model/milestoneModel'

const { View } = Backbone;
const ProjectTemplate = require('../../../templates/project/page.hbs');
const ListViewTemplate = require('../../../templates/project/listView.hbs');
const milestone = Projects.first().attributes;

class ProjectLayoutView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = ProjectTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template(milestone));
        switch (milestone.viewtype) {
            case 1:
                new ProjectTasksView(ListViewTemplate);
                break;
            default:
                console.warn()
        }
    }
}

export { ProjectLayoutView }