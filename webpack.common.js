const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const webpack = require('webpack');

module.exports = {
  entry: {
  	//index: './src/index.js',
    main: './src/main.js',
    detail: './src/detail.js',
    reserve: './src/reserve.js',
    myreservation : './src/myreservation.js'
  },
  plugins: [
  	new CleanWebpackPlugin(['dist']),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // Specify the common bundle's name.
    // })
    new HtmlWebpackPlugin({
      title: 'Code Splitting',
    })
  ],
  /* todo. change directory */
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'resources/bundle')
  },
  module: {
	  rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
       }
      },
	  	{
	   		test: /\.css$/,
		   	use: [ 'style-loader', 'css-loader' ]
	   	},
   		{
      	test: /\.(png|svg|jpg|gif)$/,
      	use: [
        	'file-loader'
       	]
     	},
     	{
     		test: /\.(woff|woff2|eot|ttf|otf)$/,
     		use: [
     			'file-loader'
     		]
     	}
    ]
	}
};