var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var docsSchema = Schema({
    title: String,
    company_id: Schema.Types.ObjectId,
    articles: [{
        _id: Schema.Types.ObjectId,
        title: String,
        content: String,
        created: Date,
        user_id: Schema.Types.ObjectId
    }]
});

module.exports = mongoose.model('Docs', docsSchema);