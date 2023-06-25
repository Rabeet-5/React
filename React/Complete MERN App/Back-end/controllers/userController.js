const catchAsyncError = require('../middleware/asyncError');
const User = require('../Models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail')


// register  user api 
exports.registerUser = catchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'this is a sample id',
            URL: 'ProfilepicURL'
        }
    })

    sendToken(user, 201, res)

})


//Login Api

exports.loginUser = catchAsyncError(async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler('please enter Email & Password', 400))
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorHandler('Invalid email or password', 401))
    }

    const isPasswordMatched = user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401))
    }

    sendToken(user, 200, res)


})

//Logout Api

exports.Logout = catchAsyncError(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        message: 'User Logged Out succesfully',
        success: true
    })
});


//Forgot Password Api

exports.forgetPassword = catchAsyncError(async (req, res, next) => {

    const findUser = await User.findOne({ email: req.body.email })

    if (!findUser) {
        return next(new ErrorHandler('User Not Found', 404))
    }

    const resetToken = findUser.getResetPasswordToken();
    await findUser.save({ validateBeforeSave: false })

    //pasword url
    const resetPasswordUrl = `${req.protocol}://${req.get('host')}/password/reset/${resetToken}`
    const message = `your Password reset token is :- \n\n ${resetPasswordUrl} \n\If you have not requested this email
        then please ignore it  `

    try {
        await sendEmail({
            email:findUser.email,
            subject:'Ecommerce password recovery',
            message,
        })

        res.status(200).json({
            message:`email send to ${findUser.email} successfully`,
            success:true
        })
    } catch (error) {

        findUser.resetPasswordToken = undefined;
        findUser.resetPasswordExpire = undefined;
        await findUser.save({ validateBeforeSave: false })

        return next(new ErrorHandler(error.message,500))
    }
})