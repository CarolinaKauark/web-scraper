const productsService = require("../services/products.service");

const getProducts = async (req, res, next) => {
  try {
    const { web, category, query} = req.body;
    
    const payload = {
      web, 
      category: category.toLowerCase(),
      query: query.toLowerCase(),
    }

    const products = await productsService.getProducts(payload);

    return res.status(200).json(products); 
  } catch (err) {
    next(err)
  }
}

module.exports = { getProducts }