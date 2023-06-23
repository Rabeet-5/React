const express = require('express');
const router = express.Router();
const { registerUser, loginUser, Logout } = require('../controllers/userController');


router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/logout').get(Logout);


module.exports = router; 
