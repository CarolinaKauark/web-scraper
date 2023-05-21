const productsService = require("../service/products.service");

const getProducts = async (req, res, next) => {
  try {
    const { web, category, query} = req.body;
    const payload = {
      web, 
      category: category.toLowerCase(),
      query: query.toLowerCase(),
    }
    const products = productsService.getProducts(payload);

    const mock = [ 
      {
        photo: '',
        description: 'A tv samsung led',
        category: 'tv',
        price: '300',
        website: 'mercado livre',
      },
      {
        photo: '',
        description: 'Other tv samsung led',
        category: 'tv',
        price: '400',
        website: 'mercado livre',
      },
      {
        photo: '',
        description: 'Another tv samsung led',
        category: 'tv',
        price: '500',
        website: 'mercado livre',
      }
    ]
    return res.status(200).json(mock); 
  } catch (err) {
    next(err)
  }
}

module.exports = { getProducts }