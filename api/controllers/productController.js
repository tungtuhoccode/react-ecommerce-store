
const products = require("../model/productsModel.js.js")

//@desc Fetch mutiple products
//@route GET /products
const getProducts = async (req, res, next) => {
    
    res.json(products)
}

const getTrendingProducts = async (req, res, next) => {
    
}

module.exports = {
    getProducts,
    getTrendingProducts
};

