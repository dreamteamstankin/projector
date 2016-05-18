var express = require('express');
var router = express.Router();

var response = [{},{}];

router.route('/user/')
    .get(function(req, res) {
        res.json(response);
    });

module.exports = router;
