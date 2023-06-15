const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("DB CONNECTED")
    })
    .catch((e)=>{
        console.log(e)
    })
}

module.exports = connectDB;