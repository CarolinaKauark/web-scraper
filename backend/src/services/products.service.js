const getBCPProducts = require("../helpers/webScrapers/getBCPProducts");
const getMLProducts = require("../helpers/webScrapers/getMLProducts");
const { MercadoLivre, Buscape } = require("../models/products")

const handleBCPProduct = async ({category, query}) => {
  let products = await Buscape.find({
    $and: [
      { category },
      { query },
    ] 
  });

  if(!products.length) {

    products = await getBCPProducts(category, query);

    /* NOTE: I tried to store the data from Buscapé in the database, but it didn't work
    I used the following implementations */

    // await Promise.all(products.map(async (product) => await Buscape.create(product)))
    // await Buscape.create(products);

  }

  return products;
}

const handleMLProduct = async ({category, query}) => {

  let products = await MercadoLivre.find({
    $and: [
      { category },
      { query },
    ] 
  });


  if(!products.length) {
    products = await getMLProducts(category, query);
    await MercadoLivre.create(products);
  }

  return products;
}

const getProducts = async({ web, category, query}) => {
  let products;

  if(web === 'Mercado Livre') {
    products = await handleMLProduct({ category, query });
    return products;
  } else if(web === 'Buscapé') {
    products = await handleBCPProduct({ category, query });
    return products;
  } else {
    const MLProducts = await handleMLProduct({ category, query });
    const BCPProducts = await handleBCPProduct({ category, query });
    return [...MLProducts, BCPProducts];
  }
}

module.exports = {getProducts};