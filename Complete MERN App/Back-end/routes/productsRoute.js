const express = require('express');
const { getAllProducts, createProduct, updateProducts, deleteProducts, getProductDetails } = require('../controllers/ProductsController');
const { isUserAuthenticated, authorizeRoles } = require('../middleware/authentication');
const router = express.Router();


router.route('/product').get(getAllProducts);

router.route('/admin/product/new').post(isUserAuthenticated, authorizeRoles('admin'), createProduct);

router.route('/admin/product/:id').put(isUserAuthenticated, authorizeRoles('admin'), updateProducts)

router.route('/admin/product/:id').delete(isUserAuthenticated, authorizeRoles('admin'), deleteProducts)

router.route('/product/:id').get(getProductDetails)



module.exports = router;