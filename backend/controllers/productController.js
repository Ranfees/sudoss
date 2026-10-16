const Product = require('../models/product')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            message: "Products fetched successfully",
            products: products
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
            error: error.message
        });
    }
};

const getProduct=(req,res)=>{
    res.json({
        message:"single product",
        productId:req.params.id
    })
}

const createProduct = async (req, res) => {
    try {

        console.log(req.body);

        const product = await Product.create(req.body);

        res.status(201).json({
            message: "Product created successfully",
            product: product
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to create product",
            error: error.message
        });

    }
};

const updateProduct = (req, res) => {
    res.json({
        message: "Product updated",
        id: req.params.id,
        updatedData: req.body
    });
};

const deleteProduct = (req, res) => {
    res.json({
        message: "Product deleted",
        id: req.params.id
    });
};
module.exports={getProducts,getProduct,createProduct,deleteProduct,updateProduct}