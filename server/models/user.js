var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var Schema = mongoose.Schema;

/* User */
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

var UserModel = mongoose.model('User', userSchema);

var addUser = function(info, company_id) {
    var user, user_id = mongoose.Types.ObjectId();

    CompanyModel.findOne({ name_id: company_id }, function(err, company) {
        if (err) return console.error(err);

        // extend object
        info._id = user_id;
        info.company_id = company._id;

        // save user
        user = new UserModel(info);
        user.save(function(err, user) {
            if (err) return console.error(err);
            console.log(user.login, 'save')
        });

        // update company
        company.users.push(user_id);
        company.save();
    });
};

var removeUser = function(user_id) {
    UserModel.findOne({ _id: user_id }, function(err, user) {
        CompanyModel.findOne({ _id: user.company_id }, function(err, company) {
            var index = company.users.indexOf(user_id);
            if (index > -1) {
                company.users.splice(index, 1);
            }
            company.save();
        });
        user.remove();
    })
};

// removeUser('57419b625726f138803ea964')

// addUser({
//     login: 'gcor',
//     password: '123',
//     name: 'Антон'
// }, 'gismeteo')

// UserModel.find(function(err, users) {
//     if (err) return console.error(err);
//     console.log('Пользователи:', users)
// })

// UserModel.remove({}, function(err, users) {
//     if (err) return console.error(err);
//     UserModel.count(function(err, count) {
//         if (err) return console.error(err);
//         console.log('Пользователей:', count)
//     })
// });