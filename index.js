const express = require('express')
const app = express()
const faker = require('faker')

app.set('port', 3000)

app.get('/', (req, res) => {
    res.send('Hola')
})


// Routes

app.get('/about', (req, res) => {
    res.send('ABOUT')

})


app.get('/products/:id', (req, res) => {
    res.json(products[req.params.id])
})

app.get('/products', (req, res) => {
    const { name, price } = req.query

    const products = []
    for (let i=0; i<100; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            img: faker.image.imageUrl()
        })
    }
    if (name && price) {
        products.forEach((k,v) => {
            if (k.name === name && k.price == price) res.send(products[v])
        })
    } else {
        res.send('No query')
    }
})



// Starting the server

app.listen(app.get('port'), () => {
    console.log('Listening in ' + app.get('port'))
})