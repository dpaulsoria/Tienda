class UsersService {

  constructor() {
    this.users = require('../data/users')

  }

  create(data) {
    const newId = this.users.length
    const newUser = {
      "id": newId,
      ...data
    }
    this.users.push(newUser)
    return { message: "created", user: newId }
  }

  find(username) {
    const index = this.users.findIndex(item => item.username === username || item.id === username)
    if (index === -1) throw new Error('Book not found')
    else return this.users[index]
  }

  update(username, changes) {
    const index = this.users.findIndex(item => item.username === username || item.id === username)
    const newUser = {
      "id": parseInt(username, 10),
      ...changes
    }
    console.log(index, newUser, changes)
    if (index === -1) throw new Error('Book not found')
    else this.users[index] = newUser
    return { message: "updated", user: username }
  }

  delete(username) {
    const index = this.users.findIndex(item => item.username === username || item.id === username)
    if (index === -1) throw new Error('User not found')
    else this.users.splice(index, 1)
    return { message: "deleted", user: username }
  }

}

module.exports = UsersService
