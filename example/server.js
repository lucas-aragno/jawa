var webpack = require('webpack')
var express = require('express')
var path = require('path')
var app = express()

var config = require('./webpack.config')
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
 noInfo: true,
 publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(5000, 'localhost', function (err) {
 if (err) {
   console.log(err)
   return
 }
 console.log('Listening at localhost:5000')
})
