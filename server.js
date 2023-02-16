const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const projectsData = require('./datas/projects.json')
const port = process.env.PORT || 3001

const app = express()
const config = require('./bundler/webpack.config.development.js')
const compiler = webpack(config)

//i18N
const i18n = require('./i18n/index.js')

const lang = {
  header: i18n.header,
}

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
)

// Use .env file to store password or key api
require('dotenv').config()

// PUG template engine
app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }))

// Add static file  like js and css
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  const datas = projectsData.filter((items) => projectsData.indexOf(items) <= 2)

  res.render('pages/home', {
    datas,
    lang,
  })
})

app.get('/about', (req, res) => {
  res.render('pages/about', { lang })
})

// MIDDLEWARE
//Propagate lang object to Route
const langHandler = (req, res, next) => {
  res.locals.lang = lang
  next()
}
app.use('/connect', require('./Routes/Users'))
app.use('/projects', langHandler, require('./Routes/Projects'))

// Page no found handler
app.use((req, res) => {
  res.status(404).render('404')
})

/**
 * Connect to database
 */
const uri = process.env.MONGODB_URI
const ops = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'portfolioDB',
}

mongoose
  .connect(uri, ops)
  .then(() => {
    console.log('Succefully connect to the database')
  })
  .catch((error) => {
    console.log(error)
  })

// Start Server
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
