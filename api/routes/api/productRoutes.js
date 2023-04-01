const express = require('express')
const router = express.Router();
const {
    getProducts,
    getTrendingProducts,
    createProduct
} = require('../../controllers/productController')
const ROLES_LIST = require('../../constant/roles')

//route for getting all products
router.route('/')
    .get(getProducts)
    .post(createProduct)

router.route('/trending')
    .get(getTrendingProducts)

//route for get product by id
router.route("/:id")



module.exports = router;