var express = require('express');
var router = express.Router();

router.route('/project/')
    .get(function(req, res) {
        res.json({
            'привет': 'проект!'
        });
    });

module.exports = router;
