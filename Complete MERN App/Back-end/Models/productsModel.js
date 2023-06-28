const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter Product name'],
        trim: true
    },

    description: {
        type: String,
        required: [true, 'Please enter Product description']
    },

    price: {
        type: Number,
        required: [true, 'Please enter Product Price'],
        maxLength: [6, 'Price cannot be exceed then 6 figures']
    },

    ratings: {
        type: Number,
        default: 0
    },

    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            URL: {
                type: String,
                required: true
            },
        }
    ],

    category: {
        type:String,
        required:[true,'Please Enter Products Categories'],
    },

    stock:{
        type:Number,
        required:[true,'Please Enter Products Stock'],
        maxLength:[100,'Stock cannot be exceed then 100'],
        default:1,
    },

    numOfReviews:{
        type:Number,
        default:0
    },

    reviews:[{
        user:{
            type:mongoose.Schema.ObjectId,
            ref:'user',
            required:true
        },
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],

    createdTime:{
        type:Date,
        required:Date.now
    },

    user:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        required:true
    }


}) 

module.exports = mongoose.model('Products',productSchema);

