import { AppRouter } from './router/router'
import { MenuView } from './view/menuView'
import { UserModel, Users } from './model/userModel'

const App = {};

var CurrentUser = new UserModel({
    id: 1
});
CurrentUser.fetch({
    success: function(){
        Users.fetch({
            data: $.param({
                company_id: CurrentUser.attributes.company.id
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
