const express = require('express');
const app = express();
const errorMiddleWare = require('./middleware/error');

app.use(express.json());

//Imported Route for Products
const product = require('./routes/productsRoute')


app.use('/api/v1',product);

//MiddleWare For Error Handling

app.use(errorMiddleWare);

module.exports = app;