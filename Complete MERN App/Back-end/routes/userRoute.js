const express = require('express');
const router = express.Router();
const { registerUser, loginUser, Logout, forgetPassword, resetPassword, getUserDetails, updateUserPasssword, updateProfile } = require('../controllers/userController');
const {isUserAuthenticated,authorizeRoles} = require('../middleware/authentication')

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/password/forgot').post(forgetPassword);

router.route('/password/reset/:token').put(resetPassword);

router.route('/logout').get(Logout);

router.route('/me').get( isUserAuthenticated,getUserDetails);

router.route('/password/update').put( isUserAuthenticated,updateUserPasssword);

router.route('/me/update').put( isUserAuthenticated,updateProfile);



module.exports = router; 
