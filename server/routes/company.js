var express = require('express');
var router = express.Router();
var CompanyModel = require('../models/company.js');

var response = [{
    company_id: 1,
    name: 'gismeteo',
    users: ['5744b2154a081212b428a7d8',2,3]
}];

var addCompany = function(info) {
    info.users = [];
    var company = new CompanyModel(info);
    company.save(function(err, company) {
        if (err) return console.error(err);
        console.log(company.name_id, 'save')
    });
};

var removeCompany = function(company_id) {
    CompanyModel.remove({_id:company_id}, function(err, companies) {
        if (err) return console.error(err);
        CompanyModel.count(function(err, count) {
            if (err) return console.error(err);
            console.log('Компаний:', count)
        })
    });
};

var removeUser = function(user_id) {
    CompanyModel.find(function(err, companies) {
        if (err) return console.error(err);
        companies.forEach(function(company){
            var index = company.users.indexOf(user_id);
            if (index > -1) {
                company.users.splice(index, 1);
                company.save();
            }
        });
    });
};
//removeUser('5744b2154a081212b428a7d8');

// addCompany({
//     name_id: 'gismeteo',
//     name: 'Гисметео'
// });

 //CompanyModel.find(function(err, companies) {
 //    if (err) return console.error(err);
 //    console.log('Компании:', companies)
 //});

// CompanyModel.remove({}, function(err, companies) {
//     if (err) return console.error(err);
//     CompanyModel.count(function(err, count) {
//         if (err) return console.error(err);
//         console.log('Компаний:', count)
//     })
// });

router.route('/company/')
    .get(function(req, res) {
        res.json(response);
    });

router.route('/company/:id')
    .get(function(req, res) {
        res.json(response[0]);
    });

module.exports = router;
