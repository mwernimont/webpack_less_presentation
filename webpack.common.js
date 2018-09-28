const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let pathsToClean = [
	'dist'	
];

//Don't want to use the webpack html generator for Vizlab most likely
//Allows us to tell webpack to exclude certain files from being cleaned
let cleanOptions = {
	exclude: ['index.html']
};

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins:[
		new CleanWebpackPlugin(pathsToClean, cleanOptions),
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		})
	],
	module:{
		rules: [
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
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