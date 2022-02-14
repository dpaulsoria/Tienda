const boom = require("boom")
const msgError = "Book not found"

class BooksService {

  constructor() {
    this.books = require('../data/books')

  }

  async create(data) {
    const newId = this.books.length
    const newBook = {
      "id": newId,
      ...data
    }
    this.books.push(newBook)
    return { message: "created", id: newId }
  }

  async find(id) {
    const index = this.books.findIndex(item => item.isbn === id || item.id === id)
    if (index === -1) boom.notFound(msgError)
    else return this.books[index]
  }

  async update(id, changes) {
    const index = this.books.findIndex(item => item.isbn === id || item.id === id)
    if (index === -1) boom.notFound(msgError)
    const book = this.books[index]
    this.books[index] = {
      ...book,
      ...changes
    }
    console.log(index, this.books[index], changes)
    return { message: "updated", "id": id }
  }

  async delete(id) {
    const index = this.books.findIndex(item => item.isbn === id || item.id === id)
    if (index === -1) boom.notFound(msgError)
    else this.books.splice(index, 1)
    return { message: "deleted", "id": id }
  }

}

module.exports = BooksService
