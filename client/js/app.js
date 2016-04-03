const { Model, View, Collection, Router } = Backbone;

const tasks = {};
const hierarchyhierarchy = {};

class AppRouter extends Router {
    constructor() {
        super({
            routes: {
                "": "index",
                "/projects": "projects",
                "/project/:projectId/": "project",
                "/task/:taskId/": "task",
                "/project/:projectId/task/:taskId/": "task",
                "/docs/": "docs",
                "/article/:articleId": "article",
                "/profile/": "profile"
            }
        });
    }

    index() {
        console.log('index')
    }

    projects(projectId) {
        console.log('projects', projectId)
    }

    task(projectId, taskId) {
        console.log('task', projectId, taskId)
    }

    docs() {
        console.log('docs')
    }

    article(articleId) {
        console.log('article', articleId)
    }

    profile() {
        console.log('profile')
    }
}
/*
class Todo extends Model {
    defaults() {
        return {
            title: '',
            completed: false
        };
    }
}
class TodoList extends Collection {
    constructor(options) {
        super(options);
        this.model = Todo;
    }
}*/

$(() => {
    const App = {};
    App.Router = new AppRouter();
    Backbone.history.start();
});
