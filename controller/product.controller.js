const Product = require('../models/product.model.js')

//get all product
const getProducts = async(req,res)=>{
    try {
        
        const product = await Product.find();
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//get a single product
const getProduct = async(req,res)=>{
    try {
        
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//create or post product
const createProduct = async(req,res)=>{
    try {
    
    const product = await Product.create(req.body);
    res.status(200).json(product)

   } catch (error) {
    res.status(500).json({message:error.message})
   }
}


//update a product
const updateProduct = async(req,res)=>{
    try {
            
            const {id} = req.params;

            const product = await Product.findByIdAndUpdate(id, req.body);

            if(!product){
                res.status(400).json({message:"product not found"})
            }

            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct)

        } catch (error) {
            res.status(500).json({message:error.message})
        }
}


//delete a product
const deleteProduct = async(req,res)=>{
    try {
        
        const {id}  = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(400).json({message:"product not found"})
        }

        res.status(200).json({message:"product deleted successfully"})

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}




module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};