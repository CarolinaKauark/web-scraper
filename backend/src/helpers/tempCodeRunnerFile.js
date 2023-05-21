const axios = require('axios');
const cheerio = require('cheerio');

const webScraper = (category, query) => {

  const URL =  `https://lista.mercadolivre.com.br/${category}/${query}`;

  return axios.get(URL).then((response) => response.data);
}

const readHTML = (HTML) => {
  const $ = cheerio.load(HTML);
  
  const selector = '#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords.shops__search-main > section > ol > li';

  console.log(selector);

  $(selector).each((i, element) => {
    const a = $('div > div > div.ui-search-result__image.shops__picturesStyles > a', element);
    const href = a.attr('href');
    const img = $('div > div > div.ui-search-result__image.shops__picturesStyles > a > div > div > div > div > div > img');
    const photo = img.attr("src");
    const obj = { href, photo}
    console.log(obj);
  })
}

const getMLProducts = async (category, query) => {
  const HTML = await webScraper(category, query);
  const products = readHTML(HTML);
}

getMLProducts('Celular', 'Iphone');