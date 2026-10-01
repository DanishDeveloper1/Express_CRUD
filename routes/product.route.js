const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js');
const {getProducts,getProduct,createProduct,updateProduct, deleteProduct} = require('../controller/product.controller.js')


//get all products
router.get('/', getProducts)

//get one product with a unique id
router.get('/:id', getProduct)

//create (post) a data
router.post('/', createProduct)

//update a product
router.put('/:id', updateProduct)

//delete a product
router.delete('/:id', deleteProduct)


module.exports = router;