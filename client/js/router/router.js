import { ProjectView } from '../view/project/projectView'
import { MilestoneView } from '../view/project/milestoneView'

const { Router } = Backbone;

class AppRouter extends Router {
    constructor() {
        super({
            routes: {
                "": "index",

                "projects": "projects",

                "project/:projectId/": "project",
                "milestone/:milestoneId": "milestone",
                "task/:taskId/": "task",

                "docs/": "docs",
                "article/:articleId": "article",
                "profile/": "profile"
            }
        });
    }

    index() {
        console.log('index');
        new ProjectView('GIS');
    }

    project(projectId) {
        console.log('projects', projectId)
    }

    milestone(milestoneId){
        console.log('milestone', milestoneId);
        new MilestoneView(milestoneId);
    }

    task(projectId, taskId) {
        //console.log('task', projectId, taskId)
    }

    docs() {
        console.log('docs')
    }

    article(articleId) {
        //console.log('article', articleId)
    }

    profile() {
        //console.log('profile')
    }
}

export { AppRouter };
