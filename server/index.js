const express = require('express')
const app = express()
const SERVER_PORT = 4000
const getProducts = require('./getProducts')
app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`))

const products = require('../products.json')

app.get('/api/products', getProducts.getProducts)

app.get('/api/product/:id', getProducts.getProductById)
