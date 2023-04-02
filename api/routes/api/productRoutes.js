const CATAGORY_LIST = require("../../constant/catagoryConstant");
const express = require('express')
const router = express.Router();
const {
    getProducts,
    getTrendingProducts,
    createProduct,
    getProductsForWomen
} = require('../../controllers/productController')

const ROLES_LIST = require('../../constant/roles')

//@route /products/
router.route('/')
    .get(getProducts)
    .post(createProduct)



//@route /products/women
router.route(`/${CATAGORY_LIST.WOMEN}`)
    .get(getProductsForWomen)



//@route /products/trending
router.route('/trending')
    .get(getTrendingProducts)



//@route /products/:id
router.route("/:id")



module.exports = router;