const express = require('express');
const router = express.Router();
const { isUserAuthenticated, authorizeRoles } = require('../middleware/authentication');
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrdersStatus, deleteOrder } = require('../controllers/orderController');


router.route('/order/new').post(isUserAuthenticated,newOrder);

router.route('/order/:id').get(isUserAuthenticated,getSingleOrder);

router.route('/orders/me').get(isUserAuthenticated,myOrders);

router.route('/admin/orders').get(isUserAuthenticated,authorizeRoles('admin'),getAllOrders);

router.route('/admin/order/:id').put(isUserAuthenticated,authorizeRoles('admin'),updateOrdersStatus).delete(
    isUserAuthenticated,authorizeRoles('admin'),deleteOrder
);



module.exports = router;