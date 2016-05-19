var express = require('express');
var router = express.Router();

var response = [{
    company_id: 1,
    name: 'gismeteo',
    users: [1,2,3]
}];

router.route('/company/')
    .get(function(req, res) {
        res.json(response);
    });

router.route('/company/:id')
    .get(function(req, res) {
        res.json(response[0]);
    });

module.exports = router;
