const template = require('../../templates/components/subtask.hbs');
module.exports = function(self) {
    return template({subtask:self});
};