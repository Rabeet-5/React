const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');
const JWT_Token = require('jsonwebtoken');
const crypto = require('crypto')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [20, 'Name cannot exceed then 20 characters'],
        minLength: [4, 'Name should have more then 4 characters']
    },

    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },

    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [8, 'passowrd should be greater then 8 characters'],
        select: false
    },

    avatar: {
        public_id: {
            type: String,
            required: true
        },
        URL: {
            type: String,
            required: true
        },
    },

    role: {
        type: String,
        default: 'user'
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

//Comparing Passwords of User

userSchema.methods.comparePassword = async function (enteredPassword) {

    console.log(enteredPassword,this.password)
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {
        next()
    }

    this.password = bcrypt.hash(this.password, 10)
})

//Jason Web Token 

userSchema.methods.JWTToken = function () {

    return JWT_Token.sign({ id: this._id }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_KEY,
    })

}



//Generating Password Reset Token

userSchema.methods.getResetPasswordToken = async function () {

    //Generating Token
    const resetToken = crypto.randomBytes(20).toString('hex');
    
    //doing Token Hash
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.resetPasswordExpire = Date.now() + 15 *60*1000;
    return resetToken;

}   

module.exports = mongoose.model('Users', userSchema)