const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const errorMiddleWare = require('./middleware/error').errorMiddleware;

app.use(express.json());
app.use(cookieParser());

//Imported Route for Products
const product = require('./routes/productsRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');


app.use('/api/v1',product);
app.use('/api/v1',user);
app.use('/api/v1', order);

//MiddleWare For Error Handling

app.use(errorMiddleWare);



module.exports = app;