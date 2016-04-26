/* global webpack */
/* global __dirname */
var path = require('path');

var loaders = [
  {
    "test": /\.jsx?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "plugins": ['transform-decorators-legacy' ],
      "presets": [
        "stage-0",
        "es2015",
        "react"
      ]
    }
  }
];


module.exports = {
    module: {
        loaders: loaders
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
      alias : {
        ui : path.resolve('./sources/frontEnd/components/material-design-ui')
      }
    },
    entry: {
      'public': "./sources/frontEnd/public"
    },
    output: {
        path: __dirname,
        filename: "./[name]/bundle.js"
    },
    noParse : [ 'react', 'react-dom', 'material-ui']
};
