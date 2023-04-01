const express = require('express')
const router = express.Router();
const {getProducts, getTrendingProducts} = require('../../controllers/productController')


router.route('/')
    .get(getProducts)

router.route('/trending')
    .get(getTrendingProducts)

//route for single product
router.route("/:id")



module.exports = router;