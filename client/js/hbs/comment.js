const template = require('../../templates/components/comment.hbs');
module.exports = function(self) {
    _.extend(self, {firstLetterName: self.userName[0]});
    return template({comment: self});
};