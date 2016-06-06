var { secret } = require('../config');
var jwt = require('express-jwt');

var getToken = (req) => {
  console.log('get token new');
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
