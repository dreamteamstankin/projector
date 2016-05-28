var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var SectionModel = require('../models/section.js');
var ArticleModel = require('../models/article.js');

var response = [{
    title: "Общие сведения",
    created: new Date()
},{
    title: "Разработка",
    created: new Date()
}];

router.route('/docs/')
    .get(function(req, res) {
        res.json(response);
    });

module.exports = router;
