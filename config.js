var nconf = require('nconf');
nconf.env().file({ file: 'config.json', search: true });

module.exports = {
  enviroment : nconf.get("NODE_ENV") || 'development',
  secret : nconf.get("SECRET") || 'development-seacret'
};
