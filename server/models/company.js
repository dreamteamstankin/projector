var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var Schema = mongoose.Schema;


/* Company */
var companySchema = Schema({
    name_id: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    users: []
});

var CompanyModel = mongoose.model('Company', companySchema);

var addCompany = function(info) {
    info.users = [];
    var company = new CompanyModel(info);
    company.save(function(err, company) {
        if (err) return console.error(err);
        console.log(company.name_id, 'save')
    });
};

// addCompany({
//     name_id: 'gismeteo',
//     name: 'Гисметео'
// });

// CompanyModel.find(function(err, companies) {
//     if (err) return console.error(err);
//     console.log('Компании:', companies)
// });

// CompanyModel.remove({}, function(err, companies) {
//     if (err) return console.error(err);
//     CompanyModel.count(function(err, count) {
//         if (err) return console.error(err);
//         console.log('Компаний:', count)
//     })
// });