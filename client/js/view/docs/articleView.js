import { Storage } from '../../helpers/storage'
import { InputHelper } from '../../helpers/inputs'
const ArticleTemplate = require('../../../templates/docs/article.hbs');

const { View } = Backbone;

class ArticleView extends View {
    constructor(article) {
        super(article);
        this.el = $('#article');
        this.template = ArticleTemplate;
        this.data = article;
        this.render();
    }

    render() {
        console.log(this.data)
        $(this.el).html(this.template(this.data));
    }
}
export { ArticleView }