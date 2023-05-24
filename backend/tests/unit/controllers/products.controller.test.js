const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const productService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const productsMock = require('./mocks/product.mock');

describe('Testing products controller layer', function () {
  afterEach(sinon.restore);

  it('Testing getProducts function', async function () {
    const res = {};
    const req = { body: { web: 'Mercado Livre', category: 'Celular', query: 'Iphone' }}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getProducts').resolves(productsMock);

    await productsController.getProducts(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(productsMock)).to.be.true;
  });

});