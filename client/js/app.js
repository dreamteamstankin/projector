import { AppRouter } from './router/router'
import { ProjectLayoutView } from './view/project/projectLayout'
import { MenuView } from './view/menu'

$(() => {
    const App = {};
    App.Router = new AppRouter();
    App.ProjectLayoutView = new ProjectLayoutView();
    App.MenuView = new MenuView();

    Backbone.history.start();
});