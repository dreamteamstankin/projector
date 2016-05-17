var ProfileTemplate = require('../../templates/profile/profile.hbs');

const { View } = Backbone;

class ProfileView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = ProfileTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template());
    }
}
export { ProfileView }