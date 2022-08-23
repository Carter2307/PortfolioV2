const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

// Load Users Form model  (mongoose schema/model)
const Projects = require('../Models/Projects')

router.post('/', (req, res) => {
  res.sendStatus(200)
  // Save data to dataBase
})

module.exports = router
