const boom = require("boom")
const msgError = "Image not found"

class ImagService {

  constructor() {
    this.imgs = require('../data/imgs')
  }

  async find(id) {
    const index = this.imgs.findIndex(item => item.img === id+'.jpg')
    if (index === -1) boom.notFound(msgError)
    else return { message: 'Image found', url: "/books/" + id + ".jpg"}
  }

}

module.exports = ImagService
