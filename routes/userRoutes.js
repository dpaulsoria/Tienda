const express = require('express')
const router = express.Router()

const users = require('../users.js')


router.get('/all', (req, res) => {
  res.json(users)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  if (id < 0) res.send('No book')
  else res.json(users[id])
})


module.exports = router
