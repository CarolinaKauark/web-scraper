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
    console.log(' 1 dentro do if', products.length);

    products = await getBCPProducts(category, query);
    console.log('2 dentro do if', products.length);

    await Buscape.create(products);
    console.log('adicionou no db');
  }
  console.log(products.length);
  return products;
}

const handleMLProduct = async ({category, query}) => {

  let products = await MercadoLivre.find({
    $and: [
      { category },
      { query },
    ] 
  });

  console.log('handle ML', products);

  if(!products.length) {
    products = await getMLProducts(category, query);
    console.log('get products from web scraper');
    await MercadoLivre.create(products);
  }

  return products;
}

const getProducts = async({ web, category, query}) => {
  let products;
  console.log('service', web);
  if(web === 'Mercado Livre') {
    products = await handleMLProduct({ category, query });
    console.log('service if', products.length);
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