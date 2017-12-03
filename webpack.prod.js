const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

// sourceamp을 사용하려면 아래를 참고,
// https://webpack.js.org/guides/production/#source-mapping
module.exports = merge(common, {
   plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
  ]
});