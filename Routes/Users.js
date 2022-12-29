const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

// Load Users Form model  (mongoose schema/model)
const Users = require('../Models/Users')

router.post('/', (req, res) => {
  // Save data to dataBase
  const { name, email, message } = req.body
  if (name === '' || email === '' || message === '') return

  const user = new Users({
    name,
    email,
    message,
    createAt: Date.now(),
  })

  user
    .save()
    .then(() => {
      res.send({
        text: 'Merci mon amie',
        type: 'success',
      })
      res.status(200).end()
    })
    .catch((error) => {
      res.send({
        text: "Une erreur c'est produite:" + error,
        classes: 'error',
      })
    })
})

module.exports = router
