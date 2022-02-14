const express = require('express')
const router = express.Router()

const bookRoutes = require('./bookRoutes')
const userRoutes = require('./userRoutes')
const imagRoutes = require('./imageRoutes')

function routerApi(app) {
  app.use('/api/img', imagRoutes)
  app.use('/api', router)
  router.use('/books', bookRoutes)
  router.use('/users', userRoutes)
}


module.exports = routerApi
