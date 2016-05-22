var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var Schema = mongoose.Schema;

/* Project */
var projectSchema = Schema({
    name_id: {
        type: String,
        required: true,
        unique: true
    },
    company_id: Schema.Types.ObjectId,
    branch: String,
    title: String
});

var ProjectModel = mongoose.model('Project', projectSchema);

var addProject = function(info) {
    project = new ProjectModel(info);
    project.save(function(err, project) {
        if (err) return console.error(err);
        console.log(project.name_id, 'save');
    });
};

var getProjects = function(milestone_id, cb) {
    MilestoneModel.find({parent: milestone_id}, 'id branch title', function(err, milestones) {
        if (err) return console.error(err);
        ProjectModel.findOne({_id: milestone_id}, function (err, projects) {
            if (err) return console.error(err);
            var extendedProject = JSON.parse(JSON.stringify(projects));
            extendedProject.tasks = milestones;
            cb(extendedProject);
        })
    });
};

var removeProject = function(project_id) {
    Project.remove({ _id: project_id }, function(err, projects) {
        if (err) return console.error(err);
        Project.count(function(err, count) {
            if (err) return console.error(err);
            console.log('Проектов:', count)
        })
    });
};

getProjects('5741d5b3d1156728812f0961', function (data) {
    console.log(data);
});

// addProject({
// 	name_id: 'GIS',
//     company_id: mongoose.Types.ObjectId('57419b50f75c452880252d4c'),
//     title: 'Погодный сайт',
//     branch: null
// })

// removeProject

// ProjectModel.find(function(err, projects) {
//     if (err) return console.error(err);
//     console.log('Проекты', projects);
// })


// ProjectModel.remove({}, function(err, projects) {
//     if (err) return console.error(err);
//     ProjectModel.count(function(err, count) {
//         if (err) return console.error(err);
//         console.log('Проектов:', count)
//     })
// });