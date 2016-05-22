var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var companySchema = Schema({
    name_id: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    users: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Company', companySchema);