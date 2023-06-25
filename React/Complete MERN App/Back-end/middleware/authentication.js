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

const authorizeRoles = (...roles)=>{
    return (req,res,next)=>{
        
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resources`),403)
        }
        next()
    }

}

module.exports = {isUserAuthenticated ,authorizeRoles };