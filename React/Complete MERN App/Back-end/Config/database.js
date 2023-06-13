const mongoose = require('mongoose');



const connectDataBase = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Mongodb connected');
    })
    .catch((error) => {
      console.error('Mongodb connection error:', error);
    });
};

module.exports = connectDataBase;