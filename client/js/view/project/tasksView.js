import { Storage } from '../../helpers/storage'
import { openTaskView } from './opentaskView'
import { TaskModel, Tasks  } from '../../model/taskModel'

const { View } = Backbone;

class TasksView extends View {
    constructor(template, tasks) {
        super();
        this.el = $('#tasks');
        this.events = {
            'click .js_task_header': 'openTask',
            'click .js_task_delete': 'removeTask',
            'click .js_task_edit': 'editTask',
            'click body': 'addTask'
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

    addTask (e) {
        //let ready = openTaskBlock.data('task-ready');
        //let taskId = openTaskBlock.data('task-id');
        //'keypress .js_add_subtask': 'addTask';
        console.log(e.currentTarget);
    }
    editTask (e) {}
    removeTask (e) {
        var id = $(e.currentTarget).data('task-id');
        var task = new TaskModel({
            id: id
        });
        task.destroy({
            headers: {
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            },
            success: function(){
                $(`tr[data-task-id="${id}"]`).remove();
            }
        })
    }

    openTask(e) {
        let item = e.currentTarget.parentNode;
        let openTaskBlock = $(item.nextElementSibling);
        let ready = openTaskBlock.data('task-ready');
        let taskId = openTaskBlock.data('task-id');
        let self = this;
        if (!ready){
            var task = new TaskModel({
                id: taskId
            });
            task.fetch({
                headers: {
                    company_id: Storage.getCookie('company_id'),
                    token: Storage.getCookie('token')
                },
                success: function(){
                    Tasks.add(task);
                    let openTask = new openTaskView(task);
                    $(openTaskBlock).html(openTask.render().el);
                    openTaskBlock.data('task-ready', true);
                    self.toggleTask(item);
                }
            });
        } else {
            self.toggleTask(item);
        }
    }
}

export { TasksView }