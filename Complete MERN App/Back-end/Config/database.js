const mongoose = require('mongoose');



const connectDataBase = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Mongodb connected');
    });
};

module.exports = connectDataBase;