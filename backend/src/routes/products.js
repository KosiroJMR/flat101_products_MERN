const { Router } = require('express');
const router = Router();

const { getProducts, createProduct, deleteProduct, updateProduct, getProduct } = require('../controllers/products.controller');



router.route('/')
    .get(getProducts)
    .post(createProduct)


router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router;