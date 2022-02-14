const joi = require('joi')

const id = joi.number().integer()

const getImagSchema = joi.object({
  id: id.required()
})

module.exports = { getImagSchema }
