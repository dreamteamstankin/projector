var express = require('express');
var router = express.Router();

var response = [{
    id: 1,
    login: 'gcor',
    password: '10',
    name: 'Антон',
    surname: 'Ахатов',
    company: {
        id: 1,
        access: 777
    }
},{
    id: 2,
    login: 'tasha',
    password: '11',
    name: 'Наталия',
    surname: 'Соломкина',
    company_id: 1
},{
    id: 3,
    login: 'tasha',
    password: '11',
    name: 'Наталия',
    surname: 'Соломкина',
    company: {
        id: 1,
        access: 1
    }
}];

router.route('/user/')
    .get(function(req, res) {
        res.json(response);
    });

router.route('/user/:id')
    .get(function(req, res) {
        res.json(response[0]);
    });

module.exports = router;
