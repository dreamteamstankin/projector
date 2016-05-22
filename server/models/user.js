var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var userSchema = Schema({
    _id: Schema.Types.ObjectId,
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    name: String,
    company_id: Schema.Types.ObjectId
});

module.exports = mongoose.model('User', userSchema);