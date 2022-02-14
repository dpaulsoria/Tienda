const express = require('express')
const router = express.Router()

const UserService = require('../services/booksService')
const service = new UserService()


router.post('/', (req, res) => {
  const body = req.body
  res.status(201).json(service.create(body))
})

router.get('/all', (req, res) => {
  res.json(service.books)
})

router.get('/:user', (req, res) => {
  const user = parseInt(req.params.user)
  if (user < 0) res.status(404).json({ message: 'Not found' })
  else res.status(200).json(service.find(user))
})

router.delete('/:user', (req, res) => {
  const user = parseInt(req.params.user)
  if (user < 0) res.status(404).json({ message: 'User not found to delete' })
  else res.status(200).json(service.delete(user))

})

router.patch('/:user', (req, res) => {
  const user = parseInt(req.params.user)
  const body = req.body
  if (user < 0) res.status(404).json({ message: 'User not found to update' })
  else res.status(200).json(service.update(user, body))
})

module.exports = router
