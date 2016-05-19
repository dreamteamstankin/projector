const { Model, Collection } = Backbone;

class UserModel extends Model {
    constructor(option) {
        super(option);
        this.urlRoot = '//localhost:7000/user';
    }
    defaults() {
        return {
            id: null,
            login: 'person',
            password: null,
            name: 'Имя',
            surname: 'Фамилия',
            company_id: null
        }
    }
}

class UserCollection extends Collection {
    constructor() {
        super();
        this.url = '//localhost:7000/user';
        this.model = UserModel;
    }
}

const Users = new UserCollection;
export { UserModel, Users}