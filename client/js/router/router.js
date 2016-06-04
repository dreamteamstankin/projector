import { ProjectView } from '../view/project/projectView'
import { ProjectsView } from '../view/project/projectsView'
import { MilestoneView } from '../view/project/milestoneView'
import { ProfileView } from '../view/profileView'
import { AuthView } from '../view/authView'
import { ArticlesView } from '../view/articlesView'
import { SettingsView } from '../view/settingsView'
import { MilestoneModel, Milestones } from '../model/milestoneModel'
import { ProjectModel, Projects } from '../model/projectModel'
import { MenuView } from '../view/menuView'

const { Router } = Backbone;

class AppRouter extends Router {
    constructor(currentUser) {
        super(currentUser);
        this.currentUser = currentUser;
        this.routes = {
            "": "index",

            "projects": "projects",

            "project/:projectId/": "project",
            "milestone/:milestoneId": "milestone",
            "task/:taskId/": "task",

            "docs/": "articles",
            "article/:articleId": "article",

            "profile/": "profile",

            "settings/": "settings",

            "logout/": "logout"
        };
        Router.apply(this);
    }

    index() {
        console.log('index');
        Projects.fetch({
            data: $.param({
                project: 'GIS'
            }),
            reset: true
        });
        Projects.bind('reset', function () {
            new ProjectsView('GIS');
        });
    }

    project(projectId) {
        console.log('projects', projectId);
        var project = new ProjectModel({
            id: projectId
        });
        project.fetch({
            success: function () {
                Projects.add(project);
                new ProjectView('GIS');
            }
        });
    }

    milestone(milestoneId) {
        console.log('milestone', milestoneId);
        Milestones.fetch({
            data: $.param({
                project: 'GIS'
            }),
            reset: true
        });
        Milestones.bind('reset', function () {
            new MilestoneView(milestoneId);
        });
    }

    task(projectId, taskId) {
        //console.log('task', projectId, taskId)
    }

    articles() {
        new ArticlesView();
    }

    settings() {
        new SettingsView();
    }

    article(articleId) {
        //console.log('article', articleId)
    }

    profile() {
        new ProfileView();
    }

    logout() {
        var auth = new AuthView();
        auth.logout();
        location.hash = '/';
        location.reload(false);
        document.location.reload(false);
        window.location.reload(false);
    }
}

export { AppRouter };
