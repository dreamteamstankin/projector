var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;
var db = require('../components/db')

var userSchema = new Schema({
    login: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: String
});

createUser = function() {
    var newUser = {
        login: 'tasha',
        password: '2',
        name: 'Таша'
    }
    var user = new User(newUser);
    user.save(function(err) {
        User.find(function(err, users) {
            if (err) console.log('ERR ERR ERR ERR ERR ');
            console.log(newUser.login + ' added');
            console.log('_____');
            console.log(users);
        });
    });
}
dropUser = function() {
    User.remove({}, function(err, User) {
        console.log('Successfully deleted all');
    });
}
// createUser()
// dropUser()

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);