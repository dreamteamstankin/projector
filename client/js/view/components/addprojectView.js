import { Storage } from '../../helpers/storage'
import { InputHelper } from '../../helpers/inputs'
import { ProjectModel, Projects} from '../../model/projectModel'
import { ProjectsView } from '../project/projectsView'

const CreateProjectTemplate = require('../../../templates/components/addproject.hbs');
const { View } = Backbone;


class AddProjectView extends View {
    constructor() {
        super({
            tagName: 'div',
            className: 'addproject'
        });
        this.events = {
            'keypress .js_addproject_id': 'createProjectByEnter',
            'keypress .js_addproject_title': 'createProjectByEnter',
            'click .js_addproject_submit': 'createProject'
        };
        this.template = CreateProjectTemplate;
        View.apply(this);
    }

    render() {
        var exist = document.querySelectorAll('.addproject');
        if (!exist.length) {
            var parent = document.getElementById('page');
            this.el.innerHTML = this.template();
            parent.insertBefore(this.el, parent.children[0]);
        }
    }

    createProjectByEnter(e) {
        if (e.keyCode === 13) {
            this.createProject();
        }
    }

    createProject(e) {
        var name_id = this.$el.find('.js_addproject_id');
        var title = this.$el.find('.js_addproject_title');
        var idValue = InputHelper.initInput(name_id).toString();
        var titleValue = InputHelper.initInput(title).toString();

        if (idValue && titleValue) {
            var project = {
                name_id: idValue.toUpperCase(),
                title: titleValue
            };
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/project/',
                dataType: 'JSON',
                data: JSON.stringify(project),
                contentType: 'application/json',
                headers: {
                    company_id: Storage.getCookie('company_id'),
                    token: Storage.getCookie('token')
                },
                success: function(data){
                    var response = JSON.parse(data);
                    if (response.status) {
                        console.log(response);
                        Projects.add(new ProjectModel(data));
                        var projectsPage = new ProjectsView();
                        projectsPage.render();
                    } else {
                        $(name_id).addClass('input_state_error');
                        $(title).addClass('input_state_error');
                    }
                }
            });
        }
    }
}
export { AddProjectView }