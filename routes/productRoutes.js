const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const accessControlMiddleware = require('../middlewares/accessControlMiddleware')

// Apply access control middleware to product creation route
router.post('/products',accessControlMiddleware,productController.createProduct);

// Public route for getting all products
router.get('/products', productController.getAllProducts);

module.exports = router;
