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
  const id = parseInt(req.params.id)

  console.log("GET " + id)

  if (id < 0) res.status(404).json({ message: 'Not found' })
  else res.status(200).json(service.find(id))
})

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)

  console.log("DELETE " + id)

  if (id < 0) res.status(404).json({ message: 'Book not found to delete' })
  else res.status(200).json(service.delete(id))

})

router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const body = req.body ;

  console.log("PATCH " + id)
  console.log(body)

  if (id < 0) res.status(404).json({ message: 'Book not found to update' })
  else res.status(200).json(service.update(id, body))
})

module.exports = router
