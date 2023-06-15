const express = require('express')
const User = require('../../model/userSchema');
const router = express.Router();

const {
    updateCart
} = require('../../controllers/userAccountController');

router.route('/updateCart').post(updateCart)


module.exports = router;