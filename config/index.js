const mongoose = require('mongoose')
const express = require('express')
const { mongoUrl, port } = require('./env.variables')
const bodyParser = require('body-parser')
const { join } = require('path')
const cors = require('cors')

//DATAS
const photos = require('../datas/photos.json')
const projectsData = require('../datas/projects.json')

module.exports = {
  initDB: () => {
    const uri = mongoUrl
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
  },
  expressInitBody: (app) => {
    //expressjs.com/en/resources/middleware/cors.html
    app.use(cors())
    //app.use(cookieParser())
    app.use(express.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    //app.use(helmet())
  },
  views: (app) => {
    app.set('views', './views')
    app.set('view engine', 'pug')
    // Add static file  like js and css
    app.use(express.static(join(__dirname, '../public')))
  },
  language: () => {
    const i18n = require('../i18n')
    const lang = {
      header: i18n.header,
    }
    //Propagate lang object to Route
    return (req, res, next) => {
      res.locals.lang = lang
      next()
    }
  },
  pageNotFound: (app) => {
    app.use((req, res) => {
      res.status(404).render('404')
    })
  },
  server: (app) => {
    app.listen(port, () => {
      console.log(`Host on : localhost:${port}`)
    })
  },
  datas: { photos, projectsData },
}
