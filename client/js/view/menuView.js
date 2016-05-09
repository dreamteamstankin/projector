var MenuTemplate = require('../../templates/menu/menu.hbs');

const { View } = Backbone;
var menu = {
    links: [{
        name: 'Релизы',
        url: 'index.html'
    }, {
        name: 'Бэклог',
        url: 'bytype.html'
    }, {
        name: 'Обсуждения',
        url: 'bygroup.html'
    }, {
        name: 'Статистика',
        url: 'backlog.html'
    }, {
        name: 'Поиск',
        url: 'opentask.html'
    }]
};


class MenuView extends View {
    constructor() {
        super();
        this.el = $('#menu');
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
        this.el = $('#menu');
        this.template = MenuTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template(menu));
    }
}

export { MenuView, MenuItemView }