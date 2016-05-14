var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    title: String,
    owner: Schema.Types.ObjectId,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }]
});

var createCompany = function() {
    var newCompany = {
        title: 'Прожектор',
        owner: '568c140f238a6a31ecbbffb9',
        users: [],
        projects: []
    };
    var company = new Company(newCompany);
    company.save(function(err) {
        Company.find(function(err, companyes) {
            if (err) console.log(err);
            console.log(newCompany.title + ' created');
        });
    });
};
var dropCompany = function() {
    Company.remove({}, function(err, Company) {
        console.log('Successfully deleted all');
        console.log('______');
        console.log(Company);
    });
};
// createCompany(newCompany)

module.exports = mongoose.model('Company', companySchema);
