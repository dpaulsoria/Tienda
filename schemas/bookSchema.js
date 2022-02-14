const joi = require('joi')

const id = joi.number().integer()
const isbn = joi.number().integer()
const title = joi.string().min(4)
const author = joi.string().min(4)
const cant = joi.number().integer()
const img = joi.string().uri()


const createBookSchema = joi.object({
  id: id.required(),
  name: isbn.required(),
  title: title.required(),
  author: author.required(),
  cant: cant.required(),
  img: img.required(),
})

const updateBookSchema = joi.object({
  id: id,
  name: isbn,
  title: title,
  author: author,
  cant: cant,
  img: img,
})

const getBookSchema = joi.object({
  id: id.required()
})

const deleteBookSchema = joi.object({
  id: id.required()
})

module.exports = { createBookSchema, updateBookSchema, getBookSchema, deleteBookSchema }
