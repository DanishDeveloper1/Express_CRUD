const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();
require('dotenv').config();


//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json());


//routes
app.use('/api/products', productRoute)




// get all product
// app.get('/api/products', async(req,res)=>{
//     try {
        
//         const product = await Product.find();
//         res.status(200).json(product);

//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })


//get a product with unique id
// app.get('/api/products/:id', async(req,res)=>{

//     try {
        
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product)

//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }

// })


//create data
// app.post('/api/products', async(req,res)=>{

//    try {
    
//     const product = await Product.create(req.body);
//     res.status(200).json(product)

//    } catch (error) {
//     res.status(500).json({message:error.message})
//    }

// })



//update one data with unique id
// app.put('/api/products/:id', async(req,res)=>{

//     try {
        
//         const {id} = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if(!product){
//             res.status(400).json({message:"product not found"})
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct)

//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }

// })



//delete a product
// app.delete('/api/products/:id', async(req,res)=>{

//     try {
        
//         const {id}  = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if(!product){
//             res.status(400).json({message:"product not found"})
//         }

//         res.status(200).json({message:"product deleted successfully"})

//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }

// })


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    app.listen(3000, ()=>{
        console.log("server is running on Port 3000")
    })
    console.log("database is connected")
}).catch((error)=>{
    console.log("database is not connected", error)
})