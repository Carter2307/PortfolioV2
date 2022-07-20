const path = require('path')
const express = require('express')

const data = require('./config/data')
const port = process.env.PORT || 3000

const app = express()

// PUG template engine
app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }))

// Add static file  like js and css
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.render('pages/home', {
    data
  })
})

app.get('/about', (req, res) => {
  res.render('pages/about', {
    data
  })
})

app.get('/projects', (req, res) => {
  res.render('pages/projects', {
    data
  })
})

// Page no found handler
app.use((req, res) => {
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
