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
            email: findUser.email,
            subject: 'Ecommerce password recovery',
            message,
        })

        res.status(200).json({
            message: `email send to ${findUser.email} successfully`,
            success: true
        })
    } catch (error) {

        findUser.resetPasswordToken = undefined;
        findUser.resetPasswordExpire = undefined;
        await findUser.save({ validateBeforeSave: false })

        return next(new ErrorHandler(error.message, 500))
    }
})


//Reset password Token

exports.resetPassword = catchAsyncError(async (req, res, next) => {

    //doing token hash
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler('Reset password Token is invalid or has been expired', 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res)

})

//Get User details

exports.getUserDetails = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        user
    })
})

//Update User Password

exports.updateUserPasssword = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");
    // console.log(user.password,'Password in Database');

    const isPasswordMatch = await user.comparePassword(req.body.oldPassword)
    // console.log(isPasswordMatch,'oldpassword')

    if (!isPasswordMatch) {
        return next(new ErrorHandler("Old password is incorrect", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);


    res.status(200).json({
        success: true,
        user
    })
})


//Update User Profile

exports.updateProfile = catchAsyncError(async (req, res, next) => {

    const newUser = {
        name: req.body.name,
        email: req.body.email
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUser, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true
    })

});


//Get all Users in Admin Panel

exports.getAllUsers = catchAsyncError(async(req ,res, next)=> {

    const users = await User.find();

    res.status(200).json({
        success:true,
        users
    })
});

//Get single User details in Admin Panel

exports.getSingleUser = catchAsyncError(async(req ,res, next)=> {

    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User does not exist on this id:${req.params.id}`))
    }

    res.status(200).json({
        success:true,
        user
    })
});


//Update  Users to admin from Admin Panel

exports.updateUserRole = catchAsyncError(async (req, res, next) => {

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        role:req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUser, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true
    })

});

//Delete User from Admin Panel

exports.DeleteUserFromAdmin = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User Does not exist on this id:${req.params.id}`),400)
    }

    await user.deleteOne();

    res.status(200).json({
        success: true,
        message:'User deleted Successfully'
    })

});


