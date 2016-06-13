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
        this.events = {
            'click .js_article': 'readArticle',
            'click .js_docs_section': 'openArticlesList'
        };
        this.inizialize();
        View.apply(this);
    }

    inizialize() {
        console.log(1);
        var self = this;
        Articles.fetch({
            headers: {
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            },
            success: function(){
                self.render();
            }
        });
    }

    openArticlesList(e) {
        var section = $(e.currentTarget.parentNode);
        $('.js_article').removeClass('opened');
        if (section.hasClass('opened')) {
            section.removeClass('opened');
        } else {
            section.addClass('opened');
        }
    }
    readArticle(e) {
        var item = $(e.currentTarget);
        var itemId = item.data('id');
        Articles.each(function(section){
            _.each(section.attributes.articles, function(article){
                if (article._id === itemId) {
                    var renderArticle = new ArticleView(article);
                }
            });
        });
    }

    render() {
        var self = this;
        var sections = Articles.toJSON();
        console.log(sections);
        $(self.el).html(self.template({sections:sections}));
    }
}
export { ArticlesView }