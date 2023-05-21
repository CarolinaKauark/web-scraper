const axios = require('axios');
const cheerio = require('cheerio');

const webScraper = (URL) => {

  return axios.get(URL).then((response) => response.data);
}

const readHTML = (HTML, category, query) => {
  const products = [];

  const $ = cheerio.load(HTML);
  
  const selector = '#__next > div.Content_Container__heIrp.container-lg > div > div.col-lg-9 > div.Hits_Wrapper__3q_7P > div';

  // console.log(selector);

  $(selector).each((i, element) => {
    const a = $('a', element);
    const href = a.attr('href');
    const website = 'https://www.buscape.com.br' + href;
    const img = $('a > div.SearchCard_ProductCard_Body__2wM_H > div.SearchCard_ProductCard_Image__ffKkn > span > img');
    const photo = img.attr("data-src");
    // const h2 = $('div > div > div.ui-search-result__content-wrapper.shops__result-content-wrapper > div.ui-search-item__group.ui-search-item__group--title.shops__items-group > a.ui-search-item__group__element.shops__items-group-details.ui-search-link > h2', element);
    // const description = h2.text();
    // const span = $('div > div > div.ui-search-result__content-wrapper.shops__result-content-wrapper > div.ui-search-result__content-columns.shops__content-columns > div.ui-search-result__content-column.ui-search-result__content-column--left.shops__content-columns-left > div.ui-search-item__group.ui-search-item__group--price.shops__items-group > div > div > div > span.price-tag.ui-search-price__part.shops__price-part > span.price-tag-amount > span.price-tag-fraction', element);
    // const price = span.text();

    const obj = { website, photo }
    // const obj = { website, description, price, category, query, photo }
    // products.push(website);
    console.log(obj);
  })

  return products;
}

const nextPage = (HTML) => {
  const $ = cheerio.load(HTML);
  const a = $('#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords.shops__search-main > section > div.ui-search-pagination.shops__pagination-content > ul > li.andes-pagination__button.andes-pagination__button--next.shops__pagination-button > a')

  // console.log(a);
  const next = a.attr('href');
  console.log(next);

  if(next) {
    return next;
  }

  return null;
}

const getBCPProducts = async (category, query) => {
  let allProducts = [];
  const URL =  `https://www.buscape.com.br/${category.toLowerCase()}/${query.toLowerCase()}`;
  let HTML = await webScraper(URL);
  // console.log(HTML);
  let products = readHTML(HTML, category, query);
  // console.log('products length', products.length);

  // allProducts = [...allProducts, ...products]

  // while(nextPage(HTML)) {
  //   HTML = await webScraper(nextPage(HTML), category, query);
  //   readHTML(HTML, category, query);

  //   allProducts = [...allProducts, ...products]
  // }


  // console.log(allProducts);
}

getBCPProducts('Celular', 'Iphone');