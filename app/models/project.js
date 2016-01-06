var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('../components/db')

var Task = require('../models/task.js')

var projectSchema = new Schema({
    company_id: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    name_id: {
        type: String,
        required: true,
        unique: true
    },
    title: String,
    url: String,
    description: String,
    start_date: Date,
    state: Number,
    user: {
        url: String,
        name: String,
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: '_Task'
    }]
});

createProject = function() {
    Company.findOne({
        title: 'Прожектор'
    }, function(err, Companyes) {
        if (err) console.log('ERR ERR ERR ERR ERR ');
        var newProject = {
            company_id: Companyes._id,
            name_id: 'TEST',
            title: 'Погодный сайт',
            url: '/project/' + 'TEST',
            description: 'Подробная информация о текущей погоде и детальный прогноз всегда под рукой, где бы вы ни находились.',
            start_date: new Date,
            state: 0,
            user: {
                url: '/profile/' + 'gcor',
                name: 'Антон Ахатов'
            },
            tasks: []
        }
        var project = new Project(newProject);
        project.save(function(err) {
            Project.find(function(err, projects) {
                if (err) console.log(err);
                console.log(newProject.name_id + ' added');
                console.log(projects);
            });
        });
    });
}
dropProject = function() {
        Project.remove({}, function(err, Project) {
            console.log('Successfully deleted all');
        });
    }
    // dropProject()
    // createProject()

module.exports = mongoose.model('Project', projectSchema);