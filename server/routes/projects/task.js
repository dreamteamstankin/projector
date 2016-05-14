var express = require('express');
var router = express.Router();

router.route('/task/')
    .get(function(req, res) {
        res.json({
            'привет': 'таск!'
        });
    });

module.exports = router;
