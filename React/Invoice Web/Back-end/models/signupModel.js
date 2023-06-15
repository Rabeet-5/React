const mongoose = require('mongoose');

const signupModel = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    email:{
        type:String ,
        required:true
    },
    password:{
        type:String || Number,
        required:true
    },
    

})

module.exports = mongoose.model('signup Users', signupModel);