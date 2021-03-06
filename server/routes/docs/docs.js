var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var DocsModel = require('../../models/docs.js');

router.route('/docs/')
    .delete(function(req, res) {
        DocsModel.remove({_id:req.body._id}, function(err){
            if (err) res.json({status: false});
            else res.json({status:true});
        });
    })
    .put(function(req, res) {
        DocsModel.findOne({_id: req.body._id}, function(err, section) {
            if (err || !section) res.json({status: false});
            section.title = req.body.title;
            section.company_id = req.headers.company_id;
            section.articles = req.body.articles;
            section.save();
            res.json({status: true});
        });
    })
    .post(function(req, res) {
        var newSection = new DocsModel({
            title: req.body.title,
            company_id: req.headers.company_id,
            article: []
        });
        newSection.save();
        res.json({status: true});
    })
    .get(function(req, res) {
        DocsModel.find({/*company_id: req.headers.company_id*/}, function(err, sections){
            if (err || !sections) return res.json({status: false});
            res.json({status: true, data: sections});
        });
    });


//var newSection = new DocsModel({
//    title: 'Разработка',
//    company_id: '575ef7361f43fbd36c70c888',
//    articles: [{
//        _id: '575ef7361f43fbd36c70c111',
//        title: 'HTML',
//        content: 'HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML (или XHTML). Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства.',
//        created: new Date,
//        user_id: '575ef7361f43fbd36c70c222'
//    }, {
//        _id: '575ef7361f43fbd36c70c9bb',
//        title: 'CSS',
//        content: 'CSS (/siːɛsɛs/ англ. Cascading Style Sheets — каскадные таблицы стилей) — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.',
//        created: new Date,
//        user_id: '575ef7361f43fbd36c70c9d0'
//    }]
//});

//newSection.save(function(err,doc){
//    console.log(err, doc);
//});

//DocsModel.find({}, function(err, section){
//    console.log(section);
//});

//DocsModel.remove({}, function(err, section){
//    console.log('removed');
//});

module.exports = router;