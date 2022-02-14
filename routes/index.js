const express = require('express')
const router = express.Router()

const bookRoutes = require('./bookRoutes')
const userRoutes = require('./userRoutes')

function routerApi(app) {
  app.use('/api', router)
  router.use('/books', bookRoutes)
  router.use('/users', userRoutes)
}


module.exports = routerApi
