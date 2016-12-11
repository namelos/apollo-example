const path = require('path')
const webpack = require('webpack')
const express = require('express')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, { publicPath: config.output.publicPath }))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.listen(3000, err => console.log(err || 'listening at localhost:3000'))
