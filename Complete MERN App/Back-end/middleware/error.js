const ErrorHandler = require('../utils/errorHandler');

module.exports = {
  errorMiddleware: (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    //Wrong MongoDB Product id error 
    if (err.name === 'CastError') {
      const message = `Resource Not Found: Invalid Path ${err.path}`;
      err = new ErrorHandler(message, 400);
    }

    // //Mongoose duplicate key error
    // if(err.code = 11000){
    //   const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    //   err = new ErrorHandler(message,400)

    // }

    //Wrong JWT error
    if (err.name === 'JsonWebTokenError') {
      const message = `Invalid JsonWebToken , Try again`;
      err = new ErrorHandler(message, 400);
    }

    //JWT Token Expire Error 
    if (err.name === 'TokenExpiredError') {
      const message = ` JsonWebToken is expired , Try again`;
      err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      // error: err.stack
    });
  }
};
