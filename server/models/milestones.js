var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var Schema = mongoose.Schema;

/* Milestone */
var milestoneSchema = Schema({
    title: String,
    project_name: String,
    name_id: {
        type: String,
        required: true,
        unique: true
    },
    branch: String,
    parent: Schema.Types.ObjectId,
    company_id: Schema.Types.ObjectId,
    user_id: Schema.Types.ObjectId
});


var MilestoneModel = mongoose.model('Milestone', milestoneSchema);

var addMilestone = function(info) {
    MilestoneModel.count(function(err, count) {
        if (err) return console.error(err);

        ProjectModel.findOne({ _id: info.parent }, function(err, project) {
            if (err) return console.error(err);
            if (project) {
                info.project_name = project.name_id;
                info.name_id = project.name_id + '-M-' + (count + 1);
                info.branch = project.name_id + '-M-' + (count + 1);

                milestone = new MilestoneModel(info);
                milestone.save(function(err, milestone) {
                    if (err) return console.error(err);
                    console.log(milestone.name_id, 'save')
                });
            }
        })
    })
};

// addMilestone({
//     title: 'Релиз — веха',
//     parent: mongoose.Types.ObjectId('5741d5b3d1156728812f0961'),
//     company_id: mongoose.Types.ObjectId('57419b50f75c452880252d4c'),
//     user_id: mongoose.Types.ObjectId('57419b625726f138803ea964')
// })

var removeMilestone = function(milestone_id) {
    MilestoneModel.remove({ _id: milestone_id }, function(err, milestones) {
        if (err) return console.error(err);
        MilestoneModel.count(function(err, count) {
            if (err) return console.error(err);
            console.log('Вех:', count)
        })
    });
};

// removeMilestone('5741eeb4c25d25b883ba735d');

// MilestoneModel.find(function(err, milestones) {
//     if (err) return console.error(err);
//     console.log('Вехи', milestones);
// });

// MilestoneModel.remove({}, function(err, milestones) {
//     if (err) return console.error(err);
//     MilestoneModel.count(function(err, count) {
//         if (err) return console.error(err);
//         console.log('Проектов:', count)
//     })
// });