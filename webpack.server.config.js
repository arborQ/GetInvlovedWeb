var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports =
{
    name: 'server',
    target: 'node',
    context: __dirname,
    entry: './sources/backEnd/www.js',
    output: {
        path: path.join(__dirname, 'bin'),
        filename: 'www',
        publicPath : __dirname
    },
    node: {
        __filename: true,
        __dirname: true
      },
    externals: nodeModules,
    module: {
        loaders: [
            { test: /\.js$/,

                loaders: [
                    'babel-loader'
                ]
            },
            { test:  /\.json$/, loader: 'json-loader' },
        ]
    },
    plugins: [
    ],
    devtool: 'sourcemap',
};
