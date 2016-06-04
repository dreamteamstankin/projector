var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var userSchema = Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    name: String,
    surname: String,
    company_id: Schema.Types.ObjectId,
    access: Number,
    token: String
});

userSchema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};

module.exports = mongoose.model('User', userSchema);