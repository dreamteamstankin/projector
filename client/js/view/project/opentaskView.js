const { View } = Backbone;
const listViewItemTemplate = require('../../../templates/project/listViewItem.hbs');
import { TaskModel, Tasks  } from '../../model/taskModel'

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
    }

    render() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

    addComment(e) {
        if (e.keyCode ===13) { // ENTER
            var currentModel = Tasks.findWhere({_id: this.model.attributes._id});
            var val = e.currentTarget.value;
        }
    }

    removeComment(e) {
        console.log('remove', e);
    }

    editComment(e) {
        console.log('edit', e);
    }

    addSubtask(e) {
        if (e.keyCode ===13) { // ENTER
            var currentModel = Tasks.findWhere({_id: this.model.attributes._id});
            var val = e.currentTarget.value;
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