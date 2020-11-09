const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
	devServer: {
		port: 3000,
		open: true
	},

	entry: "./src/app.js",
	output: {
		path:path.resolve(__dirname, 'dist'),
		filename: "[name].js"
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'servicios/lavafante.html',
			template: './src/lavafante.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'servicios/soat.html',
			template: './src/soat.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'servicios/parqueaderos.html',
			template: './src/parqueaderos.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'servicios/peajes.html',
			template: './src/peajes.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'servicios/gasolina.html',
			template: './src/gasolina.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'app/index.html',
			template: './src/app.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'nosotros/index.html',
			template: './src/nosotros.pug',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.pug'
		}),
		new MiniCssExtractPlugin({
			filename: "css/estilos.css"
		}),
		],
		module: {
			rules: [
				{
					test: /\.(css|scss)$/,
					use: [
						MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
					],
				},
				{ 
					test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
					loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/fonts/',
					}
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'assets/images/',
							},
						},
					],
				},
				{ 
					test: /\.pug$/,
					use: ['pug-loader']
				},
			]
		}
}