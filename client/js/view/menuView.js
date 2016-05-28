var MenuTemplate = require('../../templates/menu/menu.hbs');

const { View } = Backbone;
var menu = {
    links: [{
        name: 'Бэклог',
        url: 'bytype.html'
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
        this.events = {
            'click .js_menu_item': 'activeItem'
        };
        this.template = MenuTemplate;
        this.render();
        View.apply(this);
    }

    render() {
        this.el.html(this.template(menu));
    }

    activeItem(e) {
        $('.js_menu_item').removeClass('active');
        $(e.currentTarget).addClass('active');
    }
}
export { MenuView }