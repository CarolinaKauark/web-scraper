const productsService = require("../service/products.service");

const getProducts = async (req, res, next) => {
  try {
    const { web, category, query} = req.body;
    
    const payload = {
      web, 
      category: category.toLowerCase(),
      query: query.toLowerCase(),
    }
    console.log('controller');
    const products = await productsService.getProducts(payload);
    console.log('controller pos service', products.length)

    return res.status(200).json(products); 
  } catch (err) {
    next(err)
  }
}

module.exports = { getProducts }