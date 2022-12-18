const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const projectsData = require('../datas/projects.json')


// Load Users Form model  (mongoose schema/model)
const Projects = require('../Models/Projects')

router.get('/', (req, res) => {
  res.render('pages/projects', {projectsData})
  // Save data to dataBase
})

module.exports = router
