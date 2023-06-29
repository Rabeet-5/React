const Order = require('../Models/orderModel');
const Products = require("../Models/productsModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/asyncError");

//Create new Order

exports.newOrder = catchAsyncError(async (req, res, next) => {

    const {
        shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice
    } = req.body;

    const order = await Order.create({
        shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice,
        user: req.user._id,
        paidAt: Date.now(),
    });

    res.status(200).json({
        success: true,
        message: 'Order Created Successfully',
        order,
    });


});


//Get Single Order Details from Admin

exports.getSingleOrder = catchAsyncError(async (req, res, next) => {

    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (!order) {
        return next(new ErrorHandler('Order Not found with this id', 404));
    }

    res.status(200).json({
        success: true,
        order
    })
});

//Get Logged in User Order

exports.myOrders = catchAsyncError(async (req, res, next) => {

    const order = await Order.find({ user: req.user._id });

    res.status(200).json({
        success: true,
        order
    });

});

//Get all order details From Admin

exports.getAllOrders = catchAsyncError(async (req, res, next) => {

    const orders = await Order.find();

    if(!orders){
        return next(new ErrorHandler('Order Not Found or it has been deleted'),404)
    }

    let totalAmount = 0;

    orders.forEach(orders => {
        totalAmount += orders.totalPrice;
    });

    res.status(200).json({
        success: true,
        orders
    });

});

//Update Order Status From Admin

exports.updateOrdersStatus = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    
    if(!order){
        return next(new ErrorHandler('Order Not Found with this id',404));
    }


    if (order.orderStatus === 'Delivered') {
      return next(new ErrorHandler('Order is already marked as delivered'), 400);
    }
  
    if (req.body.status === 'Delivered') {
      order.orderItems.forEach(async (o) => {
        await updateStock(o.product, o.quantity);
      });
    }
  
    order.orderStatus = req.body.status;
  
    if (req.body.status === 'Delivered') {
      order.deliveredAt = Date.now();
    }
  
    await order.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
      order,
    });
  });
  

//Update Stock 

async function updateStock (id,quantity){

    const product = await Products.findById(id);

    product.stock = product.stock - quantity;

    product.save({validateBeforeSave:false});

};

//Delete Order from Admin

exports.deleteOrder = catchAsyncError(async (req,res,next)=>{

    const order = await Order.findById(req.params.id)

    if (!order) {
        return next(new ErrorHandler('Order Not found with this id', 404));
    }

    await order.deleteOne()

    res.status(200).json({
        success:true,
        message:'Order deleted',
        order
    })

})

