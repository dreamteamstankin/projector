import { AppRouter } from './router/router'
import { MenuView } from './view/menuView'
import { UserModel, Users } from './model/userModel'

const App = {};


var CurrentUser = new UserModel({
    _id: '5744b2154a081212b428a7d8'
});

CurrentUser.fetch({
    success: function(){
        Users.fetch({
            data: $.param({
                company_id: CurrentUser.attributes.company_id
            }),
            reset: true
        });
    }
});

Users.bind('reset', function(){
    App.MenuView = new MenuView();
    App.Router = new AppRouter(CurrentUser);
    Backbone.history.start();
});
