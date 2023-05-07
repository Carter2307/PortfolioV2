const config = require('./config')
const express = require('express')
const app = express()

//setup express to enable cors
// and bodyParser and other config class
config.expressInitBody(app)

// PUG template engine + Add static file  like js and css
config.views(app)

//i18N
const langHandler = config.language()

app.get('/', langHandler, (req, res) => {
  const datas = config.datas.projectsData.filter(
    (items) => config.datas.projectsData.indexOf(items) <= 2
  )
  res.render('pages/home', {
    datas,
  })
})

app.get('/about', langHandler, (req, res) => {
  res.render('pages/about')
})

app.get('/photographies', langHandler, (req, res) => {
  res.render('pages/photographies', { photos: config.datas.photos })
})

// MIDDLEWARE
app.use('/connect', langHandler, require('./Routes/Users'))
app.use('/projects', langHandler, require('./Routes/Projects'))

// Page no found handler
config.pageNotFound(app)

//DATA BASE CONNECTION
config.initDB()

// Start Server
config.server(app)
