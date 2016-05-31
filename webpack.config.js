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
        ui : path.resolve('./sources/frontEnd/components/ui-design/material-design-ui'),
        "flux-logic" : path.resolve('./sources/frontEnd/flux-logic'),
        routing : path.resolve('./sources/frontEnd/routing'),
        pages : path.resolve('./sources/frontEnd/pages'),
        "api-call" : path.resolve('./sources/frontEnd/ajax')
      }
    },
    entry: {
      'public': "./sources/frontEnd/public",
      'service-worker' : "./sources/frontEnd/service-worker"
    },
    output: {
        path: __dirname,
        filename: "./public/[name].bundle.js"
    },
    noParse : [ 'react', 'react-dom', 'material-ui'],
    devtool: 'source-map'
};
