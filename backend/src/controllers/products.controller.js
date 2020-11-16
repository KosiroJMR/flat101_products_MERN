const productsCtrl = {};

const Product = require('../models/Product');


productsCtrl.getProducts = async (req,res) => {
    const products = await Product.find();
    res.json({message: products});
}


productsCtrl.createProduct = async (req,res) => {
    const { title, description, author} = req.body;
    const newProduct = new Product({
        title, description, author
    })
    await newProduct.save();
    res.json({message: 'Product saved'});
}

productsCtrl.deleteProduct = async (req,res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({message:'Product deleted'});
}

productsCtrl.updateProduct = async (req,res) => { 
    const { title, description, author } = req.body;
    await Product.findByIdAndUpdate(req.params.id, {
        title, description, author
    });
    res.json({message:'Product updated'});
}


productsCtrl.getProduct = async (req,res) => {
    console.log(req.params.id);
    const product = await Product.findById(req.params.id);
    res.json({message:product});
}

module.exports = productsCtrl;