import { Storage } from '../../helpers/storage'
import { InputHelper } from '../../helpers/inputs'
import { TasksView } from './tasksView'
import { ProjectModel, Projects  } from '../../model/projectModel'
import { MilestoneModel, Milestones  } from '../../model/milestoneModel'

const { View } = Backbone;
const PageTemplate = require('../../../templates/project/page.hbs');
const ProjectTemplate = require('../../../templates/project/project.hbs');

class ProjectView extends View {
    constructor(id) {
        super(id);
        this.$el = $('#page');
        this.template = PageTemplate;
        // this.events ниже
    }

    initialize(id) {
        var self = this;
        var project = new ProjectModel({id: id});
        project.fetch({
            headers: {
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            },
            success: function () {
                Projects.add(project);
                self.data = project.attributes;
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
                case 'project':
                    var url = 'http://localhost:3000/milestone/';
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
                        if (response.status) {
                            switch (type) {
                                case 'project':
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

    removeSubtask(e, self) {
        var el = $(e.currentTarget);
        var id = el.data('id');
        $(`[data-id="${id}"]`).remove();

        var milestone = new MilestoneModel({
            id:id
        });
        milestone.destroy({
            headers: {
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            },
            success: function(response){
                $(`tr[data-task-id="${id}"]`).remove();
                console.log(123132, response)
            }
        });
    };

    render() {
        var self = this;
        this.data.pagetype = 'project'; // мы на этой странице
        this.$el.html(this.template(this.data));
        switch (this.data.viewtype) {
            case 1:
                new TasksView(ProjectTemplate, this.data);
                break;
            default:
                console.warn();
        }
        $('.js_add_subtask').off().on('keyup', function(e){
            self.addSubtask(e, self)
        });
        $('.js_remove_subtask').off().on('click', function(e){
            self.removeSubtask(e, self)
        });
    }
}

export { ProjectView }