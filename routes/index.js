import express from'express';
import { enviroment } from '../config';

var router = express.Router();

var nconf = require('nconf');

nconf.env()
      .file({ file: 'config.json', search: true });

/* GET home page. */
router.get('*', function(req, res, next) {
    if(req.originalUrl.indexOf('/api/') === 0){
      return next('route');
    }else{
      var title = 'GetInvolved';
      var development = !nconf.get("NODE_ENV");
      return res.render('index', { title : title, development : development });
    }
});

module.exports = router;
