module.exports = {
  components: 'components/**/*.js',
  webpackConfig: {
    module: {
        loaders: [
        // Babel loader, will use your project’s .babelrc
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader','eslint-loader']
            },
            {
                test: /\.less?$/,
                loaders: ["style-loader","css-loader","less-loader"]
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loaders : ["file-loader"]
            }
        ]
    }
  }
};