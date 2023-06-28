const Products = require("../Models/productsModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/asyncError");
const ApiFeatures = require("../utils/apiFeatures");

//Create-Products From Admin Panel
exports.createProduct = catchAsyncError(async (req, res, next) => {
    req.body.user = req.user.id;
    const products = await Products.create(req.body);

    res.status(201).json({
        success: true,
        products,
    });
});

//Get all Products
exports.getAllProducts = catchAsyncError(async (req, res) => {
    const productPerPage = 5;
    const countProduct = await Products.countDocuments();

    const apiFeatures = new ApiFeatures(Products.find(), req.query)
        .search()
        .filter()
        .pagination(productPerPage);
    const products = await apiFeatures.query;
    res.status(200).json({
        success: true,
        products,
    });
});

//Get Single Product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    const product_id = req.params.id;
    const product = await Products.findById(product_id);
    try {
        if (!product) {
            return next(new ErrorHandler("Product Not Found", 404));
        }

        res.status(200).json({
            success: true,
            product,
            countProduct,
        });
    } catch (e) {
        res.status(400).json({
            message: "Internal Server error Or Credential error",
        });
    }
});

//Update Products From Admin Panel
exports.updateProducts = catchAsyncError(async (req, res, next) => {
    try {
        const products = await Products.findById(req.params.id);
        if (!products) {
            return next(new ErrorHandler("Product Not Found", 404));
        }

        const updatingProduct = await Products.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
                // useFindAndModify: false
            }
        );

        res.status(200).json({
            success: true,
            updatingProduct,
        });
    } catch (error) {
        // Handle any potential errors here
        next(error);
    }
});

//Delete Products From Admin Panel
exports.deleteProducts = catchAsyncError(async (req, res, next) => {
    const product_id = req.params.id;
    const product = await Products.findById(req.params.id);
    try {
        if (!product) {
            return next(new ErrorHandler("Product Not Found", 404));
        }

        await product.deleteOne({ _id: product_id });

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully ",
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: "Internal Server or Credential Error",
        });
    }
});

//Give review and update the review

exports.createProductReview = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
        name: req.body.name,
        user: req.user._id,
        rating: rating,
        comment,
    };

    const product = await Products.findById(productId);

    const isReviewed = product.reviews.find((rev) => {
        rev.user.toString() === req.user._id.toString();
    });

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating === rating), (rev.comment === comment);
        });
    }

    else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    };

    let avgRatings = 0;

    product.reviews.forEach((ratings) => {
        avgRatings += ratings.rating;
    });

    product.ratings = avgRatings / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: "Reviewed done "
    });
});

//Get all reviews of a Single Product

exports.getAllreviewsOfProduct = catchAsyncError(async (req, res, next) => {

    const product = await Products.findById(req.query.id);

    if (!product) {
        return next(new ErrorHandler('Product not Found '), 404);
    };

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    })
});

//Delete Review of a Product

exports.deleteReview = catchAsyncError(async (req, res, next) => {
    const product = await Products.findById(req.query.productId);

    if (!product) {
        return next(new ErrorHandler('Product not found'), 404);
    }

    const reviews = product.reviews.filter((rev) => {
        return rev._id.toString() !== req.query.id.toString();
    });

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    });

    const ratings = avg / reviews.length;
    const numOfReviews = reviews.length;

    await Products.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
});



