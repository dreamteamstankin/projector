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