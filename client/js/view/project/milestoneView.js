import { Storage } from '../../helpers/storage'
import { InputHelper } from '../../helpers/inputs'
import { TasksView } from './tasksView'
import { MilestoneModel, Milestones  } from '../../model/milestoneModel'
import { TaskModel, Tasks  } from '../../model/taskModel'

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
            headers: {
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            },
            data: $.param({
                project: id
            }),
            success: function(){
                var milestone = Milestones.findWhere({name_id: id});
                self.data = (milestone) ? milestone.attributes : {};
                self.render();
            }
        });
    }

    addSubtask(e, self) {
        if (e.keyCode === 13) {
            var input = $(e.currentTarget);
            var titleValue = InputHelper.initInput(input).toString();
            var id = input.data('page-id');
            var type = input.data('page-type');
            switch (type) {
                case 'milestone':
                    var url = `http://localhost:3000/task/`;
                    break;
            }
            if (titleValue) {
                var milestone = {
                    title: titleValue,
                    parent_id: id
                };
                $.ajax({
                    type: 'POST',
                    url: url,
                    dataType: 'JSON',
                    data: JSON.stringify(milestone),
                    contentType: 'application/json',
                    headers: {
                        company_id: Storage.getCookie('company_id'),
                        token: Storage.getCookie('token')
                    },
                    success: function (data) {
                        var response = JSON.parse(data);
                        console.log('added task', response)
                        if (response.status) {
                            switch (type) {
                                case 'milestone':
                                    self.data.tasks.push({
                                        id: response.data._id,
                                        branch: response.data.branch,
                                        name_id: response.data.name_id,
                                        title : response.data.title
                                    });
                                    self.render();
                                    break;
                                default: break;
                            }
                        } else {
                            input.addClass('input_state_error');
                        }
                    }
                });
            }
        }
    }

    render() {
        var self = this;
        this.data.tasks = _.sortBy(this.data.tasks, 'branch');
        this.data.pagetype = 'milestone'; // мы на этой странице
        this.data.finish = '2016-10-15';
        this.el.html(this.template(this.data));
        switch (this.data.viewtype) {
            case 1:
                new TasksView(MilestoneTemplate, this.data);
                break;
            default:
                console.warn()
        }
        $('.js_add_subtask').off().on('keyup', function(e){
            self.addSubtask(e, self)
        });
    }
}

export { MilestoneView }