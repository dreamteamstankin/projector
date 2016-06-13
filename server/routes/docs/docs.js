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
//    title: 'Реквизиты',
//    company_id: '575ef7361f43fbd36c70c9d7',
//    articles: []
//});

//newSection.save(function(err,doc){
//    console.log(err, doc);
//});

//DocsModel.remove({}, function(err, section){
//    console.log('removed');
//});

module.exports = router;