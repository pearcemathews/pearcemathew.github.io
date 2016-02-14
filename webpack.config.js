module.exports = {
	entry: "./app-client.js",
	output: {
		filename: "./public/scripts/bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules|app-server.js|src|lib|test)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}