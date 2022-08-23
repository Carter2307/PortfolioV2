const mongoose = require('mongoose')

const User = new mongoose.Schema({
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

  message: {
    type: String,
    require: true
  },

  createAt: {
    type: Date,
    require: false
  }
},
{ collection: 'Users' }
)

const Users = mongoose.model('Users', User)
module.exports = Users
