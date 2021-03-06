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
  },
  {
    "test": /\.ts?$|\\.tsx?$/,
    "loader": "ts",
    "query": {
      "transpileOnly": true,
      "isolatedModules": true,
      "silent": true,
      "compilerOptions": {
        "jsx": "react",
        "target": "es5"
      }
    }
  }
];

module.exports = {
    module: {
        loaders: loaders
    },
    resolve: {
      root: [
        path.resolve('./'),
      ],
      extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
      alias : {
        'ui-design' : path.resolve('./sources/frontEnd/components/ui-design/material-design-ui'),
        ui : path.resolve('./sources/frontEnd/components/user-interface'),
        "flux-actions" : path.resolve('./sources/frontEnd/flux-logic'),
        routing : path.resolve('./sources/frontEnd/routing'),
        pages : path.resolve('./sources/frontEnd/pages'),
        "api-call" : path.resolve('./sources/frontEnd/ajax')
      }
    },
    entry: {
      'public': "./sources/frontEnd/public"
    },
    output: {
        path: __dirname,
        filename: "./public/[name].bundle.js"
    },
    noParse : [ 'react', 'react-dom', 'material-ui'],
    devtool: 'source-map'
};
