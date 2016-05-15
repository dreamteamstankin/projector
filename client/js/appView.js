import { AppRouter } from './router/router'
import { MenuView } from './view/menuView'

$(() => {
    const App = {};
    App.Router = new AppRouter();
    App.MenuView = new MenuView();

    Backbone.history.start();
});