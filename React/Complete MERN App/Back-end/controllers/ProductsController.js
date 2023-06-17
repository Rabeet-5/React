const Products = require('../Models/productsModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middleware/asyncError')

//Create-Products From Admin Panel
exports.createProduct = async (req, res, next) => {

    const products = await Products.create(req.body)

    res.status(201).json({
        success: true,
        products
    })
}

//Get all Products
exports.getAllProducts = async (req, res) => {

    const products = await Products.find()
    res.status(200).json({
        success: true,
        products
    })

}

//Get Single Product Details
exports.getProductDetails = async (req, res, next) => {

    const product_id = req.params.id;
    const product = await Products.findById(product_id)
    try {
        if (!product) {
            return next(new ErrorHandler('Product Not Found', 404))
        }

        res.status(200).json({
            success: true,
            product
        })
    }
    catch (e) {
        res.status(400).json({
            message: 'Internal Server error Or Credential error'
        })
    }
}

//Update Products From Admin Panel
exports.updateProducts = async (req, res, next) => {
    try {
        const products = await Products.findById(req.params.id);
        if (!products) {
            return next(new ErrorHandler('Product Not Found', 404))
        }

        const updatingProduct = await Products.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            // useFindAndModify: false
        }
        );

        res.status(200).json({
            success: true,
            updatingProduct
        });
    } catch (error) {
        // Handle any potential errors here
        next(error);
    }
};

//Delete Products From Admin Panel
exports.deleteProducts = async (req, res, next) => {

    const product_id = req.params.id;
    const product = await Products.findById(req.params.id)
    try {
        if (!product) {

            return next(new ErrorHandler('Product Not Found',404))
        }

        await product.deleteOne({ _id: product_id })

        res.status(200).json({
            success: true,
            message: 'Product Deleted Successfully '
        })
    }
    catch (e) {
        console.log(e)
        res.status(400).json({
            success: false,
            message: 'Internal Server or Credential Error'
        })
    }
}