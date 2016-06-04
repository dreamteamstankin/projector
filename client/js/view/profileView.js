import { UserModel, Users} from '../model/userModel'
import { MenuView } from './menuView'

var ProfileTemplate = require('../../templates/profile/profile.hbs');

const { View } = Backbone;

class ProfileView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = ProfileTemplate;
        this.currentUser = {
            name:1
        };
        this.render();
    }

    render() {
        //new MenuView({
        //    type: "profile",
        //    name: "Профиль",
        //    url: 'profile/',
        //    isActive: true
        //});
        this.el.html(this.template(this.currentUser.attributes));
    }
}
export { ProfileView }