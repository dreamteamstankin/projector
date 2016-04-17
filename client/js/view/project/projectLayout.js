import { ProjectTasksView } from './projectTasks'

const { View } = Backbone;

const ProjectTemplate = require('../../../templates/project/page.hbs');
const ListViewTemplate = require('../../../templates/project/listView.hbs');

const milestone = {
    id: 1,
    name_id: 'Master',
    title: 'Погодный сайт',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        name_id: 'GIS-2',
        title: 'Инициация',
        url: 'project/PY/milestone/1',
        status: 1
    }, {
        name_id: 'GIS-3',
        title: 'Планирование',
        url: 'project/PY/milestone/1',
        status: 2
    }, {
        name_id: 'GIS-4',
        title: 'Исполнение',
        url: 'project/PY/milestone/1',
        status: 3
    }, {
        name_id: 'GIS-5',
        title: 'Мониторинг и упраавление',
        url: 'project/PY/milestone/1',
        status: 4
    }, {
        name_id: 'GIS-6',
        title: 'Завершение',
        url: 'project/PY/milestone/1',
        status: 5
    }]
};

class ProjectLayoutView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = ProjectTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template(milestone));
        switch (milestone.viewtype) {
            case 1:
                new ProjectTasksView(ListViewTemplate);
                break;
            default:
                console.warn()
        }
    }
}

export { ProjectLayoutView }