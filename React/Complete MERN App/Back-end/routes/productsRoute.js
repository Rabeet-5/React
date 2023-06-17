const express = require('express');
const { getAllProducts ,createProduct, updateProducts, deleteProducts, getProductDetails} = require('../controllers/ProductsController');
const router = express.Router();


router.route('/product').get(getAllProducts);

router.route('/product/new').post(createProduct);

router.route('/product/:id').put(updateProducts)

router.route('/product/:id').delete(deleteProducts)

router.route('/product/:id').get(getProductDetails)



module.exports = router;