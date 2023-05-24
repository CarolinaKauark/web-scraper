const express = require('express');
const postMiddleware = require('../middlewares/postMiddleware');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', (req, res) => res.status(200).json('OK') )
router.post('/', postMiddleware, productsController.getProducts);

module.exports = router;