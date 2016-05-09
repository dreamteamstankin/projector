const { View } = Backbone;
const listViewItemTemplate = require('../../../templates/project/listViewItem.hbs');
import { TaskModel, Tasks  } from '../../model/taskModel'

const task = Tasks.first().attributes;

class openTaskView extends View {
    constructor() {
        super({
            tagName: 'td',
            className: 'opentask__wrap',
            attributes: {
                'colspan': 5
            }
        });
        this.template = listViewItemTemplate;
    }

    render() {
        this.$el.html(this.template(task));
        return this;
    }
}

export { openTaskView }