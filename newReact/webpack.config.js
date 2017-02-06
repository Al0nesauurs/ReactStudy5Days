const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	devtool : 'eval',
	entry :['./ui/theme/elements.scss','./ui/index.js'],
	output : {
		publicPath: '/static/',
		path: path.join(__dirname, 'static'),
		filename: 'bundle.js'
	},

	module: {
		loaders:
	 [
		{
		    test: /\.jsx?$/,
		    exclude: /node_modules/,
		    loaders: [
		      'babel-loader'
		    ]
		},
		  {
		    // สำหรับไฟล์นามสกุล css ให้ใช้ Loader สองตัวคือ css-loader และ style-loader
		    test: /\.css$/,
		    loaders: [
		      'style-loader',
		      'css-loader'
		    ]
		}, 
		{
		    // ใช้ Loader สามตัวสำหรับ scss
		    test: /\.scss$/,
		    exclude: /node_modules/,
		    loaders: [
		      'style-loader',
		      {
		        loader: 'css-loader',
		        query: {
		          sourceMap: true
		        }
		      },
		      {
		        loader: 'sass-loader',
		        query: {
		          outputStyle: 'expanded',
		          sourceMap: true
		        }
		      },

		    ]
		}
	  ]
	},devServer: {
  historyApiFallback: true,
  proxy: {
    '/api/*': {
      target: 'http://127.0.0.1:5000'
    }
  }
}
};