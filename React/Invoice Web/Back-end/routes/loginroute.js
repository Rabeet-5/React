const express = require('express');
const router = express.Router();
const { getUser } = require('../controller/controller');

router.route('/login').get(getUser)

module.exports = router;
