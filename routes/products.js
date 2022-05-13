const express = require('express')
const route = express.Router()  

const viewProduct = require('../controllers/productController')
const addProduct = require('../controllers/productController')
const fetchProduct = require('../controllers/productController')


route.get('/', fetchProduct.fetchAll )
route.get('/form', addProduct.getAddProduct )
route.post('/form', viewProduct.postAddProduct)


module.exports = route