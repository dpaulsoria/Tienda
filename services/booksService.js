class BooksService {

  constructor() {
    this.books = require('../books')

  }
  create(data) {
    const newId = this.books.length
    const newBook = {
      "id": newId,
      ...data
    }
    this.books.push(newBook)
    return { newId }
  }

  find(id) {
    const index = this.books.findIndex(item => item.isbn === id || item.id === id)
    if (index === -1) throw new Error('Book not found')
    else return this.books[index]
  }

  update(id, changes) {
    const index = this.books.findIndex(item => item.isbn === id || item.id === id)
    const newBook = {
      "id": parseInt(id, 10),
      ...changes
    }
    console.log(index, newBook, changes)
    if (index === -1) throw new Error('Book not found')
    else this.books[index] = newBook
    return { message: "updated", "id": id }
  }

  delete(id) {
    const index = this.books.findIndex(item => item.isbn === id || item.id === id)
    if (index === -1) throw new Error('Book not found')
    else this.books.splice(index, 1)
    return { message: "deleted", "id": id }
  }
}

module.exports = BooksService
