const cors = [
  'http://localhost:3000',
  'http://dpaulsoria.me'
]

const options = {
  origin: (origin, callback) => {
    if (cors.includes(origin)) callback(null, true)
    else callback(new Error('Blocked'))
  }
}

module.exports = options
