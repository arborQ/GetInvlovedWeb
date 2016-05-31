//var express = require('express');
import express from 'express';
/* GET users listing. */

var router = express.Router();
var api = router.route('/authorize');

// api.get(function(req, res){
//   res.send('OK');
//  });

api
  .post((req, res, next) => {
    var { login, password } = req.body;
    if(login === 'arbor' && password === 'arbor'){
      res.send({ isAuthenticated : true, login : 'arbor', email : 'arbor@o2.pl', roles : [ 'admin' ] });
    }else{
      res.send({ isAuthenticated : false, message : "Unknown login or password" });
    }
  });

module.exports = router;
