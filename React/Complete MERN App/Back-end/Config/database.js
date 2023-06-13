const mongoose = require('mongoose');

const connectDataBase = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Mongodb connected');
    })
    .catch((error) => {
      console.error('Mongodb connection error:', error);
    });
};

module.exports = connectDataBase;