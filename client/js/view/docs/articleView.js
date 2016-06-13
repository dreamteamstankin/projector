import { Storage } from '../../helpers/storage'
import { InputHelper } from '../../helpers/inputs'
const ArticleTemplate = require('../../../templates/docs/articles.hbs');

const { View } = Backbone;

class ArticleView extends View {
    constructor() {
        super();
        this.el = $('#article');
        this.template = ArticleTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template());
    }
}
export { ArticleView }