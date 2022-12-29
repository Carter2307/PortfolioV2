const express = require('express')
const router = express.Router()

const { logos } = require('../datas/realisations.json')
const userProject = require('../Models/UserProjects')

router.post('/usersProjects', (req, res) => {
  // Save data to dataBase
  const { projectUserName, projectUserMail, projectDescription } = req.body

  if (
    projectUserName === '' ||
    projectUserMail === '' ||
    projectDescription === ''
  )
    return

  const user = new userProject({
    name: projectUserName,
    email: projectUserMail,
    projectDetails: projectDescription,
    createAt: Date.now(),
  })

  user
    .save()
    .then(() => {
      res.send({
        text: 'Your request has been taken into account and you will receive an answer within 24 hours.',
        type: 'success',
      })
      res.status(200).end()
    })
    .catch((error) => {
      res.send({
        text: 'An Error occurs:' + error,
        classes: 'error',
      })
    })
})

router.get('/', (req, res) => {
  res.render('pages/projects', { logos })
})

module.exports = router
