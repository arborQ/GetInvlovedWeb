var express = require('express');
var nconf = require('nconf');

nconf.env()
     .file({ file: 'config.json', search: true });

var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index', { title: 'GetInvolved', development : !nconf.get("NODE_ENV") });
});

module.exports = router;
