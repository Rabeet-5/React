const mongoose  = require('mongoose');


const loginModel = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String || Number,
        required:true
    }
})

module.exports = mongoose.model('Login Users' , loginModel);