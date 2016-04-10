import { AppRouter } from './router/router'
import { AppView } from './view/project'

$(() => {
    const App = {};
    App.Router = new AppRouter();
    App.AppView = new AppView();

    Backbone.history.start();
});