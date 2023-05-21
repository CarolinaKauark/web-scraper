const { MercadoLivre, Buscape } = require("../models/products")

const findProduct = async ({ web, category, query}) => {
  let model;
  if (web === 'Mercado Livre' ) {
    model = MercadoLivre;
  } else if( web === 'Buscapé') {
    model = Buscape;
  }

  return model.find({
    $and: [
      { category },
      { query },
    ] })
};

const getProducts = async(payload) => {
  let products = await findProduct(payload);
  if(!products) {
    products = webScraper();
  }

  return products;
}

module.exports = {findProduct, getProducts};