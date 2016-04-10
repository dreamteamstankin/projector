const { Model, Collection } = Backbone;

class MenuModel extends Model {
    defaults() {
        return {
            id: 1,
            name_id: 'GIS-0',
            title: 'Релиз 2.1',
            description: 'Описание',
            tasks: []
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