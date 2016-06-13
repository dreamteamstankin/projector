import { Storage } from '../../helpers/storage';
import { ArticleModel, Articles} from '../../model/articleModel';
import { ArticleView } from './articleView';
const ArticlesTemplate = require('../../../templates/docs/articles.hbs');
const { View } = Backbone;

class ArticlesView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = ArticlesTemplate;
        this.render();
        this.events = {
            'click .js_article': 'readArticle',
            'click .js_docs_section': 'openArticlesList'
        };
        View.apply(this);
    }

    openArticlesList(e) {
        console.log(1, e);
    }
    readArticle(e) {
        console.log(2, e);
    }

    render() {
        var self = this;
        Articles.fetch({
            headers: {
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            },
            success: function(){
                var sections = Articles.toJSON();
                console.log(sections);
                $(self.el).html(self.template({sections:sections}));
            }
        });
    }
}
export { ArticlesView }