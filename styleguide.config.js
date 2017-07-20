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
            }
        ]
    }
  }
};