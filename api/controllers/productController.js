const Product = require('../model/productSchema');
const CATAGORY_LIST = require("../constant/catagoryConstant");

//@desc Fetch mutiple products
//@route GET /products/
//@acess Public (? may be this should be private)
const getProducts = async (req, res, next) => {
    console.log("getting products")
    const products = await Product.find();
    if(!products) return res.status(204).json({"message":"No product found"})
    res.json(products)
}


//@desc Fetch mutiple products
//@route POST /products/
//@acess    Admin
const createProduct = async (req, res, next) => {
    //check if all properties exist
    if(!req.body){
        return res.status(400).json({"message":"missing body"})
    }
    switch(true){
        case(!req.body.name):
            return res.status(400).json({"message": "missing name"})
        case(!req.body.description):
            return res.status(400).json({"message": "missing description"})
        case(!req.body.price):
            return res.status(400).json({"message": "missing price"})
        case(!req.body.color):
            return res.status(400).json({"message": "missing color"})
        case(!req.body.size):
            return res.status(400).json({"message": "missing size"})
        case(!req.body.catagory):
            return res.status(400).json({"message": "missing catagory"})
        case(!req.body.images):
            return res.status(400).json({"message": "missing images"})
        case(!req.body.stock):
            return  res.status(400).json({"message": "missing stock"})

        default: 
            break;   
    }

    try{
        const product = await Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            color: req.body.color,
            size: req.body.size,
            catagory: req.body.catagory,
            images: req.body.images,
            stock: req.body.stock,
        })

        res.status(200).json({
            "message":"Successfully created product",
            "product": product
        });
    }
    catch(err){
        res.status(200).json(err);
        console.log("Error adding product to database")
        console.log(err);
    }
}



//@desc fetch products for women
//@route Get /products/women
//@acess    PUBLIC
const getProductsForWomen = async (req, res, next) => {
    const womenProducts = await Product.find(
        {catagory: CATAGORY_LIST.WOMEN}
    );

    if(!womenProducts) return res.status(204).json({"message":"No product found for women"})
    res.json(womenProducts)
}


const getTrendingProducts = async (req, res, next) => {
    console.log("getting products")
    const products = await Product.find().limit(8);
    if(!products) return res.status(204).json({"message":"No product found"})
    res.json(products) 
}

module.exports = {
    getProducts,
    getTrendingProducts,
    createProduct, 
    getProductsForWomen
};

