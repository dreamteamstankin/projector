import { openTaskView } from './opentaskView'

const { View } = Backbone;

class TasksView extends View {
    constructor(template, tasks) {
        super();
        this.el = $('#tasks');
        this.events = {
            'click .js_task_header': 'openTask'
        };
        this.template = template;
        this.tasks = tasks;
        this.render();
        View.apply(this);
    }

    render() {
        this.el.html(this.template(this.tasks));
    }

    toggleTask(task) {
        $('.js_task_header').removeClass('open');
        if ($(task).hasClass('open')) {
            $(task).removeClass('open');
        } else {
            $(task).addClass('open');
        }
    }

    openTask(e) {
        let openTaskBlock = $(e.currentTarget.nextElementSibling);
        let ready = openTaskBlock.data('task-ready');
        if (!ready){
            let openTask = new openTaskView();
            $(openTaskBlock).html(openTask.render().el);
            openTaskBlock.data('task-ready', true);
            this.toggleTask(e.currentTarget);
        } else {
            this.toggleTask(e.currentTarget);
        }
    }
}

export { TasksView }