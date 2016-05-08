const { Router } = Backbone;

class AppRouter extends Router {
    constructor() {
        super({
            routes: {
                "": "index",
                "projects": "projects",
                "project/:projectId/": "project",
                "task/:taskId/": "task",
                "project/:projectId/task/:taskId/": "task",
                "docs/": "docs",
                "project/:projectId/milestone/:milestoneId": "milestone",
                "article/:articleId": "article",
                "profile/": "profile"
            }
        });
    }

    index() {
        console.log('indцex')
    }

    project(projectId) {
        console.log('projects', projectId)
    }

    milestone(projectId, milestoneId){
        console.log('milestone', milestoneId)
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
