/* global webpack */
/* global __dirname */

var loaders = [
  {
    "test": /\.jsx?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
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
      extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    entry: {
      'public': "./sources/public"
    },
    output: {
        path: __dirname,
        filename: "./public/bundles/[name].bundle.js"
    },
    noParse : [ 'react', 'react-dom', 'material-ui']
};
