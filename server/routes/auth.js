var express = require('express');
var mongoose = require('mongoose');
var UserModel = require('../models/user.js');
var CompanyModel = require('../models/company.js');
var crypto = require('crypto');
var router = express.Router();


var addCompany = function(info) {
    info.users = [];
    var company = new CompanyModel(info);
    company.save(function(err, company) {
        if (err) return console.error(err);
        console.log(company.name_id, 'save')
    });
};

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


router.route('/login/')
    .post(function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var token = req.body.token;
        UserModel.findOne({
            username: username,
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
                return res.json({
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
                    _id: user._id,
                    username: user.username,
                    company_id: user.company_id,
                    surname: user.surname,
                    name: user.name
                },
                version: 1,
                message: 'Success'
            })
        });
    });

module.exports = router;
