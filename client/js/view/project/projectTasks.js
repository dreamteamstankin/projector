import { ProjectTaskView } from './projectTask'
import { ProjectModel, Projects  } from '../../model/milestoneModel'

const { View } = Backbone;
const milestone = Projects.first().attributes;

class ProjectTasksView extends View {
    constructor(template) {
        super();
        this.el = $('#tasks');
        this.events = {
            'click .js_task_header': 'openTask'
        };
        this.template = template;
        this.render();
        View.apply(this);
    }

    render() {
        this.el.html(this.template(milestone));
    }

    toggleTask(task) {
        if (task.classList.contains('open')) {
            $('.js_task_header').removeClass('open');
            $(task).removeClass('open');
        } else {
            $('.js_task_header').removeClass('open');
            $(task).addClass('open');
        }
    }

    openTask(e) {
        let opentaskBlock = $(e.currentTarget.nextElementSibling);
        let ready = opentaskBlock.data('task-ready');
        if (!ready){
            let opentask = new ProjectTaskView();
            $(opentaskBlock).html(opentask.render().el);
            opentaskBlock.data('task-ready', true);
            this.toggleTask(e.currentTarget);
        } else {
            this.toggleTask(e.currentTarget);
        }
    }
}

export { ProjectTasksView }