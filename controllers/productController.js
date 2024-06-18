import Product from '../models/productModel.js';

// GET PRODUCT
const getProduct = async (req, res, next) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// GET PRODUCT BY ID
const getProductByID = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(400).json({message: `cannot find any product by with ID ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

// POST PRODUCT
const postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

// UPDATE PRODUCT BY ID
const putProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product by with ID ${id}`})
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});        
    }
};

export default {
    getProduct,
    getProductByID,
    postProduct,
    putProduct,
    deleteProduct
}