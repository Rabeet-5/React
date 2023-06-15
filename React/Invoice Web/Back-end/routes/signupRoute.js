const express = require('express');
const route = express.Router()
const {createUser } = require('../controller/controller');

route.route('/signup').post(createUser);



module.exports = route;

