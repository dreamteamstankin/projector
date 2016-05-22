var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

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

module.exports = mongoose.model('Project', projectSchema);