var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

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


module.exports = mongoose.model('Milestone', milestoneSchema);