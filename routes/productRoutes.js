const express = require('express')
const { getAllProducts, createProduct,getProductById,updateProduct, deleteProduct } = require('../controllers/productController')
const productRoutes = express.Router()

// define all products route
productRoutes.get('/', getAllProducts)
productRoutes.get('/:id', getProductById)
productRoutes.post('/',createProduct)
productRoutes.patch('/:id', updateProduct)
productRoutes.delete('/:id', deleteProduct)
module.exports = productRoutes

