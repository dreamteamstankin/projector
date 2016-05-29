import { TaskModel, Tasks  } from '../../model/taskModel'
import { UserModel, Users } from '../../model/userModel'

const { View } = Backbone;
const listViewItemTemplate = require('../../../templates/project/listViewItem.hbs');

class openTaskView extends View {
    constructor(task) {
        super({
            tagName: 'td',
            className: 'opentask__wrap',
            attributes: {
                'colspan': 6
            }
        });
        this.model = task;
        this.template = listViewItemTemplate;
        this.events = {
            'keypress .js_add_comment': 'addComment',
            'click .js_remove_comment': 'removeComment',
            'click .js_edit_comment': 'editComment',
            'keypress .js_add_subtask': 'addSubtask',
            'click .js_remove_subtask': 'removeSubtask',
            'click .js_edit_subtask': 'editSubtask'
        };
        View.apply(this);
        this.listenTo(this.model, 'change', function(d){
            console.log('listenTo', d)
        });
    }

    render() {
        console.log(this.model.attributes)
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

    addComment(e) {
        if (e.keyCode === 13) { // ENTER
            var val = e.currentTarget.value;
            console.log(this.model);
            //var currentModel = Tasks.findWhere({_id: this.model.attributes._id});
        }
    }

    removeComment(e) {
        console.log('remove', e);
    }

    editComment(e) {
        console.log('edit', e);
    }

    addSubtask(e) {
        var currentUser = Users.first();
        if (e.keyCode === 13) { // ENTER
            var val = e.currentTarget.value;
            var subtasks = this.model.attributes.subtasks;
            subtasks.push({
                completed: false,
                date_start: new Date,
                date_finish: null,
                count_money: 0,
                count_time: 0,
                title: val,
                user_id: currentUser.attributes._id,
                userName: currentUser.attributes.name
            });

            this.model.save({subtasks: subtasks});
        }
    }

    removeSubtask(e) {
        console.log('remove', e);
    }

    editSubtask(e) {
        console.log('edit', e);
    }
}

export { openTaskView }