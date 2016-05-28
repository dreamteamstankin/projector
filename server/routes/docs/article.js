var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var SectionModel = require('../models/section.js');
var ArticleModel = require('../models/article.js');

var response = [{
    name_id: "general_info",
    title: "Общие сведения",
    sections_id: '1312124ab123n123',
    content: "Тестовый текст чего нибудь",
    created: new Date()
},{
    name_id: "dev",
    title: "Разработка",
    sections_id: 'addlfkasdl;jasdf',
    content: "еще вдруг тестовый текст чего нибудь",
    created: new Date()
}];

router.route('/docs/:id')
    .get(function(req, res) {
        res.json(response);
    });

module.exports = router;
