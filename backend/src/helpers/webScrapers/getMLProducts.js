const axios = require('axios');
const cheerio = require('cheerio');

const webScraper = (URL) => {

  return axios.get(URL).then((response) => response.data);
}

const readHTML = (HTML, category, query) => {
  const products = [];

  const $ = cheerio.load(HTML);
  
  const selector = '#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords.shops__search-main > section > ol > li';

  $(selector).each((i, element) => {
    const a = $('div > div > div.ui-search-result__image.shops__picturesStyles > a', element);
    const website = a.attr('href');
    const img = $('div > div > div.ui-search-result__image.shops__picturesStyles > a > div > div > div > div > div > img');
    const photo = img.attr("data-src");
    const h2 = $('div > div > div.ui-search-result__content-wrapper.shops__result-content-wrapper > div.ui-search-item__group.ui-search-item__group--title.shops__items-group > a.ui-search-item__group__element.shops__items-group-details.ui-search-link > h2', element);
    const description = h2.text();
    const span = $('div > div > div.ui-search-result__content-wrapper.shops__result-content-wrapper > div.ui-search-result__content-columns.shops__content-columns > div.ui-search-result__content-column.ui-search-result__content-column--left.shops__content-columns-left > div.ui-search-item__group.ui-search-item__group--price.shops__items-group > div > div > div > span.price-tag.ui-search-price__part.shops__price-part > span.price-tag-amount > span.price-tag-fraction', element);
    const price = span.text();

    const obj = { website, description, price, category, query, photo }
    products.push(obj);
  })

  return products;
}

const nextPage = (HTML) => {
  const $ = cheerio.load(HTML);
  const a = $('#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords.shops__search-main > section > div.ui-search-pagination.shops__pagination-content > ul > li.andes-pagination__button.andes-pagination__button--next.shops__pagination-button > a')

  const next = a.attr('href');

  if(next) {
    return next;
  }

  return null;
}

const getMLProducts = async (category, query) => {
  let allProducts = [];
  const URL =  `https://lista.mercadolivre.com.br/${category}/${query}`;
  let HTML = await webScraper(URL);
  let products = readHTML(HTML, category, query);

  allProducts = [...allProducts, ...products]
  let page = 0;
  while(nextPage(HTML) && page <= 3) {
    HTML = await webScraper(nextPage(HTML));
    products = readHTML(HTML, category, query);
    console.log('No while', products.length);  
    allProducts = [...allProducts, ...products]
    page += 1;
  }

  console.log(allProducts.length);
  return allProducts;
}

// getMLProducts('celular', 'iphone');

module.exports = getMLProducts;