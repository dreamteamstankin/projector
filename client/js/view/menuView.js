import { AddProjectView } from './components/addProjectView'

const MenuTemplate = require('../../templates/menu/menu.hbs');
const { View } = Backbone;

const menu = [{
        type: "project",
        name: "Проект",
        url: '/',
        isActive: true,
        canCreate: true
        //,
        //links: [{
        //    name: 'Бэклог',
        //    url: 'backlog'
        //}, {
        //    name: 'Статистика',
        //    url: 'stats'
        //}, {
        //    name: 'Поиск',
        //    url: 'search'
        //}]
    }, {
        type: 'docs',
        name: "Документация",
        url: 'docs/'
    }, {
        type: 'settings',
        name: "Настройки",
        url: 'settings/'
    }];


class MenuView extends View {
    constructor(option) {
        super(option);
        this.el = $('#menu');
        this.data = menu;
        this.events = {
            'click .js_menu_item': 'activeItem',
            'click .js_menu_subitem': 'changeSection',
            'click .js_create_project': 'showCreateProjectForm'
        };
        this.template = MenuTemplate;
        this.render();
        View.apply(this);
    }

    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        $(this.el).html(this.template({sections: this.data, user: user}));
    }

    activeItem(e) {
        $('.js_menu_item').removeClass('active');
        $(e.currentTarget).addClass('active');
    }

    changeSection(e) {
        var type = $(e.currentTarget).data('type');
        $('.js_menu_subitem').removeClass('active');
        $(e.currentTarget).addClass('active');
        _.each(menu, function(section){
            section.isActive = (type == section.type);
        });
        this.render();
    }

    showCreateProjectForm (e) {
        var addProject = new AddProjectView();
        addProject.render();
    }
}
export { MenuView }