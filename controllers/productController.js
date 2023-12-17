const Product = require('../models/productModel');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    // TODO: Fetch all products from the database
    const products = await Product.find();
    res.json({ message: 'Get all products', products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    // TODO 1: Create a new Product and check if the role is admin if admin then, implement TODO 2
    // TODO 2: Create a new product, save it to the database, and send a success response
    
    const userRole = req.user.role; 
    
    if(userRole !== 'admin'){
      return res.status(403).json({message: "Unauthorized"})
    }
    
    const {name, price }= req.body; 
    const newProduct = new Product({name,price});
    
    await newProduct.save();
    res.status(201).json({ message: 'Create a new product', product: newProduct });
    

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
