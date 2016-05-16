import { openTaskView } from './opentaskView'
import { TaskModel, Tasks  } from '../../model/taskModel'

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
        $('.js_task_header').parent().removeClass('open');
        if ($(task).hasClass('open')) {
            $(task).removeClass('open');
        } else {
            $(task).addClass('open');
        }
    }

    openTask(e) {
        let item = e.currentTarget.parentNode;
        let openTaskBlock = $(item.nextElementSibling);
        let ready = openTaskBlock.data('task-ready');
        let taskId = openTaskBlock.data('task-id');
        let self = this;
        if (!ready){
            Tasks.fetch({
                data: $.param({
                    task: 'taskId'
                }),
                reset: true
            });
            Tasks.bind('reset', function () {
                let openTask = new openTaskView(Tasks);
                $(openTaskBlock).html(openTask.render().el);
                openTaskBlock.data('task-ready', true);
                self.toggleTask(item);
            });
        } else {
            self.toggleTask(item);
        }
    }
}

export { TasksView }