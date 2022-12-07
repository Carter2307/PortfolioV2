const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

// Load Users Form model  (mongoose schema/model)
const Projects = require('../Models/Projects')

router.get('/', (req, res) => {
  res.render('pages/projects')
  // Save data to dataBase
})

module.exports = router
