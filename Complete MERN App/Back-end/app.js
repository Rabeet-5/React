const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const errorMiddleWare = require('./middleware/error').errorMiddleware;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload())

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