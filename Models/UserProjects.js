const mongoose = require('mongoose')

const Project = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },

  email: {
    type: String,
    require: true
  },

  name: {
    type: String,
    require: true
  },

  projectDetails: {
    type: String,
    require: true
  },

  createAt: {
    type: Date,
    require: false
  }
},
{ collection: 'Projects' }
)

const Projects = mongoose.model('Projects', Project)
module.exports = Projects
