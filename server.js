const path = require('path');
const express = require('express');
const dist_dir = path.join(__dirname, 'dist');

// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

app.use(express.static(dist_dir));

app.get("*", function (req, res) {  
  res.sendFile(path.join(dist_dir, 'index.html'));
});

// const config = require('./webpack.prod.js');
// const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('app listening on port 3000!\n');
});