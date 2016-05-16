import { ProjectView } from '../view/project/projectView'
import { MilestoneView } from '../view/project/milestoneView'
import { MilestoneModel, Milestones  } from '../model/milestoneModel'
import { ProjectModel, Projects  } from '../model/projectModel'

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
        var project = new ProjectModel({
            id: 'GIS'
        });
        project.fetch({
            success: function(){
                Projects.add(project);
                new ProjectView('GIS');
            }
        });
    }

    project(projectId) {
        console.log('projects', projectId)
    }

    milestone(milestoneId){
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
