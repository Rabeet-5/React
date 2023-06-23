const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('./asyncError')
const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');


const isUserAuthenticated = catchAsyncError(async (req, res, next) => {

    const { token } = req.cookies;

    if (!token) {
        next(new ErrorHandler('Please Login to access this resources', 401))
    }

    const decodedData = jwt.verify(token,process.env.JWT_KEY)

    req.user = await User.findById(decodedData.id)
    next()
})


//Creating Admin Role

exports.authorizeRole = (...roles)=>{
    return (req,res,next)=>{
        
        if(!roles.includes.user.role){
            new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resources`)
        }
        next()
    }

}

module.exports = isUserAuthenticated;