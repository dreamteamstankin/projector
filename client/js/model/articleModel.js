import { AppRouter } from '../router/router'
const { Model, Collection } = Backbone;

class ArticleModel extends Model {
    constructor(option) {
        super(option);
        this.urlRoot = '//localhost:7000/docs';
        this.parse = function(response) {
            if (response.status){
                return response.data;
            } else if (response.auth === false){
                //new AppRouter().logout();
            }
        }
    }
    defaults() {
        return {
            _id: '132123',
            title: 'asdasd',
            articles: []
        }
    }
}

class ArticleCollection extends Collection {
    constructor() {
        super();
        this.url = '//localhost:7000/docs';
        this.model = ArticleModel;
        this.parse = function(response) {
            if (response.status){
                return response.data;
            } else if (response.auth === false){
                //new AppRouter().logout();
            }
        }
    }
}

const Articles = new ArticleCollection;
export { ArticleModel, Articles }