import { AppRouter } from './router/router'
import { ProjectPageView } from './view/project/projectpage'
import { MenuView } from './view/menu'

$(() => {
    const App = {};
    App.Router = new AppRouter();
    App.ProjectPageView = new ProjectPageView();
    App.MenuView = new MenuView();

    Backbone.history.start();
});