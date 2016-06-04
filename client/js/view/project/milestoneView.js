import { TasksView } from './tasksView'
import { MilestoneModel, Milestones  } from '../../model/milestoneModel'

const { View } = Backbone;
const PageTemplate = require('../../../templates/project/page.hbs');
const MilestoneTemplate = require('../../../templates/project/listView.hbs');

class MilestoneView extends View {
    constructor(id) {
        super(id);
        this.el = $('#page');
        this.template = PageTemplate;
    }

    initialize (id) {
        var self = this;
        Milestones.fetch({
            data: $.param({
                project: 'GIS'
            }),
            success: function(){
                var milestone = Milestones.findWhere({name_id: id});
                self.data = (milestone) ? milestone.attributes : {};
                self.render();
            }
        });
    }

    render() {
        this.el.html(this.template(this.data));
        switch (this.data.viewtype) {
            case 1:
                new TasksView(MilestoneTemplate, this.data);
                break;
            default:
                console.warn()
        }
    }
}

export { MilestoneView }