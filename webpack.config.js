module.exports = {
  entry: "./src/index.js",
  output: { filename: "./bin/app.js" },
  module: {
   loaders: [
     { test: /\.json$/, loader: 'json-loader' }
   ]
 },
 resolve: {
   extensions: ['.webpack.js', '.web.js', '.js']
 },
 node: {
    console: 'mock',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
