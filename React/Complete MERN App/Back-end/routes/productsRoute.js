const express = require('express');
const { getAllProducts, createProduct, updateProducts, deleteProducts, getProductDetails } = require('../controllers/ProductsController');
const {isUserAuthenticated,authorizeRoles} = require('../middleware/authentication');
const router = express.Router();


router.route('/product').get(isUserAuthenticated, authorizeRoles('admin'), getAllProducts);

router.route('/product/new').post(isUserAuthenticated, createProduct);

router.route('/product/:id').put(isUserAuthenticated, updateProducts)

router.route('/product/:id').delete(isUserAuthenticated, deleteProducts)

router.route('/product/:id').get(getProductDetails)



module.exports = router;