import { AppRouter } from './router/router'
import { AuthView } from './view/authView'
import { UserModel, Users } from './model/userModel'

new AuthView();

Users.bind('add', function(){
    // TODO
    var currentUser = Users.first();
    window.Router = new AppRouter(currentUser);

    // главная стрнаица
    window.Router.index();

    Backbone.history.start();
});
