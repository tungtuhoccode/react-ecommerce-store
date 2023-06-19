const CATAGORY_LIST = require("../../constant/categoryConstant");
const express = require('express')
const router = express.Router();

const {
    getProducts,
    getTrendingProducts,
    getFeaturedProducts,
    createProduct,
    getProductsForWomen,
    getProductsForMen,
    getProductsForChildren,
    getProductById,
    exportProductData
} = require('../../controllers/productController')

const ROLES_LIST = require('../../constant/roles')

//@route /products/ 

router.route('/')
    //GET: get all products (PUBLIC)
    .get(getProducts)
    //POST: create new product (PROTECTED) (@allowed ADMIN)
    .post(createProduct)

//@route /products/women (PUBLIC)
router.route(`/${CATAGORY_LIST.WOMEN}`)
    .get(getProductsForWomen)

//@route /products/men (PUBLIC)
router.route(`/${CATAGORY_LIST.MEN}`)
    .get(getProductsForMen)

//@route /products/men (PUBLIC)
router.route(`/${CATAGORY_LIST.CHILDREN}`)
    .get(getProductsForChildren)

//@route /products/trending (PUBLIC)
//@desc Getting trending product (mostly for homepage)
router.route('/trending')
    .get(getTrendingProducts)

router.route('/featured')
    .get(getFeaturedProducts)

router.route("/export_product_data")
    .get(exportProductData)

//@route /products/:id (PUBLIC)
//@desc Getting product by id
router.route("/:id")
    .get(getProductById)




module.exports = router;