var express = require('express');
var router = express.Router();

router.route('/milestone/')
    .get(function(req, res) {
        res.json({
            'привет': 'веха!'
        });
    });

module.exports = router;
