var MenuTemplate = require('../../templates/menu/menu.hbs');

const { View } = Backbone;

var menu = [{
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

var user = JSON.parse(localStorage.getItem('user'));


class MenuView extends View {
    constructor(customMenu) {
        super(customMenu);
        this.el = $('#menu');
        //if (customMenu) {
        //    var newMenu = [];
            //_.each(menu, function(item){
            //    item.isActive = false;
            //    newMenu.push(item);
            //});
            //newMenu.push(customMenu);
        //}
        this.data = menu;
        this.events = {
            'click .js_menu_item': 'activeItem',
            'click .js_menu_subitem': 'changeSection'
        };
        this.template = MenuTemplate;
        this.render();
        View.apply(this);
    }

    render() {
        console.log(user)
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
}
export { MenuView }