var acl = require('acl');
var mongoose = require('mongoose');

acl = new acl(new acl.memoryBackend());

acl.allow([{
    roles: ['guest', 'member'],
    allows: [{
        resources: 'blogs',
        permissions: 'get'
    }, {
        resources: ['forums', 'news'],
        permissions: ['get', 'put', 'delete']
    }]
}, {
    roles: ['gold', 'silver'],
    allows: [{
        resources: 'cash',
        permissions: ['sell', 'exchange']
    }, {
        resources: ['account', 'deposit'],
        permissions: ['put', 'delete']
    }]
}])
acl.addUserRoles('joed', 'guest')


module.exports = acl;