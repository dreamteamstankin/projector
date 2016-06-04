var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var UserModel = require('../models/user.js');
var CompanyModel = require('../models/company.js');
var crypto = require('crypto');
var router = express.Router();


var response = [{
    _id: '5744b2154a081212b428a7d8',
    username: 'gcor',
    password: '10',
    name: 'Антон',
    surname: 'Ахатов',
    company_id: '5744b1d035f581ebb3e40fc5',
    access: 777
}];


var addUser = function (info, company_id) {
    var user, user_id = mongoose.Types.ObjectId();

    CompanyModel.findOne({name_id: company_id}, function (err, company) {
        if (err) return console.error(err);

        // extend object
        info._id = user_id;
        info.company_id = company._id;

        // save user
        user = new UserModel(info);
        user.save(function (err, user) {
            if (err) return console.error(err);
            console.log(user.login, 'save')
        });

        // update company
        company.users.push(user_id);
        company.save();
    });
};

var removeUser = function (user_id) {
    UserModel.findOne({_id: user_id}, function (err, user) {
        CompanyModel.findOne({_id: user.company_id}, function (err, company) {
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

//addUser({
//    username: 'gcor',
//    password: '123',
//    name: 'Антон',
//    surname: 'Ахатов'
//}, 'gismeteo');

//UserModel.find(function(err, users) {
//    if (err) return console.error(err);
//    console.log('Пользователи:', users)
//});

// UserModel.remove({}, function(err, users) {
//     if (err) return console.error(err);
//     UserModel.count(function(err, count) {
//         if (err) return console.error(err);
//         console.log('Пользователей:', count)
//     })
// });

//var name = 'braitsch';
//var hash = crypto.createHash('md5').update(name).digest('hex');
//console.log(hash); // 9b74c9897bac770ffc029102a200c5de

router.route('/login/')
    .post(function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var token = req.body.token;
        UserModel.findOne({
            username: username,
            password: password,
            token: token
        }, function (err, user) {
            if (err) return res.json({
                code: 500,
                status: 1,
                auth: false,
                message: 'error'
            });

            if (!user) return res.json({
                code: 300,
                status: 2,
                auth: false,
                message: 'Incorrect username.'
            });

            if (!user.validPassword(password)) {
                res.json({
                    code: 300,
                    status: 3,
                    auth: false,
                    message: 'Incorrect password.'
                })
            }

            return res.json({
                code: 200,
                status: 0,
                auth: true,
                user: {
                    username: user.username,
                    _id: user._id,
                    company_id: user.company_id,
                    surname: user.surname,
                    name: user.name
                },
                version: 1,
                message: 'Success'
            })
        });
    });

router.route('/user/')
    .get(function (req, res) {
        res.json(response);
    });

router.route('/user/:id')
    .get(function (req, res) {
        res.json(response[0]);
    });

module.exports = router;
