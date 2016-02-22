/* global webpack */
/* global __dirname */
module.exports = {
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /(node_modules|bower_components)/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    entry: {

        // angular: "./sources/application.angular/app.ts",
      'public': "./sources/public"
    },
    output: {
        path: __dirname,
        filename: "./public/bundles/[name].bundle.js"
    },
    // plugins: [
    //   new webpack.HotModuleReplacementPlugin()
    // ],
    // devtool: 'source-map',
    noParse : [ 'react', 'react-dom', 'material-ui']
};
