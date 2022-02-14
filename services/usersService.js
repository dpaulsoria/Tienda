const boom = require("boom")
const msgError = "User not found"

class UsersService {

  constructor() {
    this.users = require('../data/users')

  }

  async create(data) {
    const newId = this.users.length
    const newUser = {
      "id": newId,
      ...data
    }
    this.users.push(newUser)
    return { message: "created", user: newId }
  }

  async login(username, password) {
    const index = this.users.findIndex(item => item.username === username || item.password === password)
    if (index === -1) boom.notFound(msgError)
    else return { message: 'Confirmation' }
  }

  async find(username) {
    const index = this.users.findIndex(item => item.username === username || item.id === username)
    if (index === -1) boom.notFound(msgError)
    else return this.users[index]
  }

  async update(username, changes) {
    const index = this.users.findIndex(item => item.username === username || item.id === username)
    if (index === -1) boom.notFound(msgError)
    const book = this.users[index]
    this.users[index] = {
      ...book,
      ...changes
    }
    console.log(index, this.users[index], changes)
    return { message: "updated", "id": username }
  }

  async delete(username) {
    const index = this.users.findIndex(item => item.username === username || item.id === username)
    if (index === -1) boom.notFound(msgError)
    else this.users.splice(index, 1)
    return { message: "deleted", user: username }
  }

}

module.exports = UsersService
