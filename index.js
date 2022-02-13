const express = require('express')
const app = express()

app.set('port', 3000)

app.get('/', (req, res) => {
    res.send('Hola')
})

// Routes

app.get('/about', (req, res) => {
    res.send('ABOUT')

})

app.get('/products', (req, res) => {
    res.json({
        name: "macbook",
        price: 2000
    })
})

app.listen(app.get('port'), () => {
    console.log('Listening in ' + app.get('port'))
})