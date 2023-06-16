const express = require('express')
const app = express();
const cors = require('cors')
app.use(express.json());
const signup = require('./routes/signupRoute');
const login  = require('./routes/loginroute')

app.use(cors())
app.use('/api/users',login )
app.use('/api',signup)

module.exports = app;