const express = require('express')
const router = express.Router()

const BooksService = require('../services/booksService')
const service = new BooksService()


router.post('/', (req, res) => {
  const body = req.body
  console.log(body)
  res.status(201).json({ created: true })
})

router.get('/all', (req, res) => {
  res.json(service.books)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  if (id < 0) res.status(404).json({ message: 'Not found' })
  else res.json(service.findById(id))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  if (id < 0) res.send('No book')
  else {
    service.books[id] = {}
    res.status(200).json({ deleted: true })
  }
})

module.exports = router
