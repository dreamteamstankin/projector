var SettingsTemplate = require('../../templates/settings/settings.hbs');

const { View } = Backbone;

class SettingsView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = SettingsTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template());
    }
}
export { SettingsView }