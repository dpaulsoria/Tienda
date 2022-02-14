class BooksService {

  constructor() {
    this.books = require('../books')

  }
  create(data) {
    const newBook = {
      "id": this.books.length,
      ...data
    }
    this.books.push(newBook)
  }

  findById(id) {
    return this.books[id]
  }

  find() {
    return this.books
  }

  findOne() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = BooksService
