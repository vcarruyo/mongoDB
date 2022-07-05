const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');


// webpack.config.js
const baseConfig = {
    entry: './server.js',
    target: 'node',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.js',
    }    
  };

  module.exports = baseConfig;
