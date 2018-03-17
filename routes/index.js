var express = require('express');
var router = express.Router();
var string = require('string');
var cmd = require('node-cmd');

/* GET home page. */
router.get('/', function(req, res, next) {
    var test = string(hola).between('Status','/').s;
    var clean1 = test.split(':');
    var trim = clean1[1].trim();
    console.log(trim);
  res.render('index', { title: 'Diseño y Seguridad' });
});

module.exports = router;
