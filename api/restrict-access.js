var { secret } = require('../config');
var jwt = require('express-jwt');

var getToken = (req) => {
  console.log(req.headers['auth-token']);
  return req.headers['auth-token'];
};
var router =
  jwt({ secret, getToken })
  .unless({ path:
    [
      //public paths
      '/api/authorize'
    ]
  });
module.exports = router;
