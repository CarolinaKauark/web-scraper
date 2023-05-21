const axios = require('axios');
const cheerio = require('cheerio');

const webScraper = (URL) => {

  return axios.get(URL).then((response) => response.data);
}

const readHTML = (HTML, category, query) => {
  const products = [];

  const $ = cheerio.load(HTML);
  
  const selector = '#__next > div.Content_Container__heIrp.container-lg > div > div.col-lg-9 > div.Hits_Wrapper__3q_7P > div';

  $(selector).each((i, element) => {
    const a = $('a', element);
    const href = a.attr('href');
    const website = 'https://www.buscape.com.br' + href;
    const img = $('a > div.SearchCard_ProductCard_Body__2wM_H > div.SearchCard_ProductCard_Image__ffKkn > span > img', element);
    const photo = img.attr("src");
    const h2 = $('a > div.SearchCard_ProductCard_Body__2wM_H >  div.SearchCard_ProductCard_Description__fGXI3 > div.SearchCard_ProductCard_NameWrapper__Gv0x_ > div > h2.SearchCard_ProductCard_Name__ZaO5o', element);
    const description = h2.text();
    const p = $('a > div.SearchCard_ProductCard_Body__2wM_H > div.Space_Space__43IaB.Space_Space__small__w35wB.Space_Space__vertical__4PBHk.SearchCard_ProductCard_Description__fGXI3 > div:nth-child(2) > p.Text_Text__h_AF6.Text_MobileHeadingS__Zxam2', element);
    const value = p.text();
    const price = value.split(' ').pop();

    // const obj = { website, photo, description, price }
    const obj = { website, description, price, category, query, photo }
    products.push(obj);
  })

  return products;
}

const nextPage = (HTML) => {
  const $ = cheerio.load(HTML);
  const a = $('#__next > div.Content_Container__heIrp.container-lg > div > div.col-lg-9 > ul.Paginator_paginator__j178K > li:nth-child(7) > a')
  const next = a.attr('href');

  if(next) {
    return next;
  }

  return null;
}

const getBCPProducts = async (category, query) => {
  let allProducts = [];
  const URL =  `https://www.buscape.com.br/${category}/${query}`;
  let HTML = await webScraper(URL);
  let products = readHTML(HTML, category, query);
  allProducts = [...allProducts, ...products];

  while(nextPage(HTML)) {
    HTML = await webScraper(`https://www.buscape.com.br${nextPage(HTML)}`, category, query);
    products = readHTML(HTML, category, query);

    allProducts = [...allProducts, ...products]
  }


  return allProducts;
}

getBCPProducts('celular', 'iphone');

module.exports = getBCPProducts;