var MenuTemplate = require('../../templates/menu/menu.hbs');

const { View } = Backbone;
var menu = [{
    name: 'Релизы',
    url: 'index.html',
    selected: true
}, {
    name: 'Бэклог',
    url: 'bytype.html',
    selected: false
}, {
    name: 'Обсуждения',
    url: 'bygroup.html',
    selected: false
}, {
    name: 'Статистика',
    url: 'backlog.html',
    selected: false
}, {
    name: 'Поиск',
    url: 'opentask.html',
    selected: false
}];


class MenuView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = MenuTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template(menu));
    }
}

class MenuItemView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = MenuTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template(menu));
    }
}

export { MenuView, MenuItemView }