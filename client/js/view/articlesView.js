var ArticlesTemplate = require('../../templates/docs/articles.hbs');

const { View } = Backbone;

class ArticlesView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = ArticlesTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template());
    }
}
export { ArticlesView }