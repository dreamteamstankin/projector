const { View } = Backbone;
const listViewItemTemplate = require('../../../templates/project/listViewItem.hbs');

class openTaskView extends View {
    constructor(task) {
        super({
            tagName: 'td',
            className: 'opentask__wrap',
            attributes: {
                'colspan': 5
            }
        });
        this.collection = task;
        this.template = listViewItemTemplate;
    }

    render() {
        this.$el.html(this.template(this.collection));
        return this;
    }
}

export { openTaskView }