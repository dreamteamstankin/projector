import { UserModel, Users} from '../model/userModel'

var ProfileTemplate = require('../../templates/profile/profile.hbs');

const { View } = Backbone;

class ProfileView extends View {
    constructor(options) {
        super(options);
        this.el = $('#page');
        this.template = ProfileTemplate;
        this.currentUser = options.currentUser;
        this.render();
    }

    render() {
        this.el.html(this.template(this.currentUser.attributes));
    }
}
export { ProfileView }