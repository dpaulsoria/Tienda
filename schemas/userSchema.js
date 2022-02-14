const joi = require('joi')

const id = joi.number().integer()
const name = joi.string().min(4).max(10)
const lastname = joi.string().min(4).max(10)
const admin = joi.boolean()
const username = joi.string().min(4).max(10)
const password = joi.string().min(4).max(10)
const books = joi.array()

const createUserSchema = joi.object({
  id: id.required(),
  name: name.required(),
  lastname: lastname.required(),
  admin: admin.required(),
  username: username.required(),
  password: password.required(),
  books: books.required()
})

const updateUserSchema = joi.object({
  id: id,
  name: name,
  lastname: lastname,
  admin: admin,
  username: username,
  password: password,
  books: books
})

const getUserSchema = joi.object({
  id: id.required()
})

const deleteUserSchema = joi.object({
  id: id.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema }
