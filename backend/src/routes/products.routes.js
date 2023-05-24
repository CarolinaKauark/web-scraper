const express = require('express');
const postMiddleware = require('../middlewares/postMiddleware');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.post('/', postMiddleware, productsController.getProducts);

module.exports = router;