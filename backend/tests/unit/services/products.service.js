const { expect } = require('chai');
const sinon = require('sinon');

const productService = require('../../../src/services/products.service');
const productsMock = require('../controllers/mocks/product.mock');

describe('Testing products service layer', function () {
  it('Testing getProducts function - web: Mercado Livre', async function () {
    sinon.stub(productService, 'handleMLProduct').resolves(productsMock);

    const products = await productService.getProducts({ web: 'Mercado Livre', category: 'Celular', query: 'Iphone' });

    expect(products).to.deep.equal(productsMock);
  });
});