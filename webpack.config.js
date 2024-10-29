const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'http://localhost/anc',
      files: [
        './**/*.php',
        './dist/**/*.js',
        './dist/**/*.css'
      ],
      port: 3000
    })
  ]
}
