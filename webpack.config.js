const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: [
      './functions.js',
      './main.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'dist/js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new BrowserSyncPlugin({
      proxy: 'http://localhost/anc',
      files: [
        './**/*.php',
        './dist/**/*.js',
        './*.css',
        './main.scss'
      ],
      port: 3000,
      injectChanges: true,
      notify: false
    })
  ]
}
