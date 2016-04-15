const { Model, Collection } = Backbone;

class MenuModel extends Model {
    defaults() {
        return {
            name: 'Пункт',
            url: '#'
        }
    }
}
class MenuCollection extends Collection {
    constructor() {
        super();
        this.model = MenuModel;
    }
}

export { MenuModel, MenuCollection }