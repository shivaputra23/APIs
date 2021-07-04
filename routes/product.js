const Router = require('express').Router();

const { createProduct } = require('../controller/product');

Router.post('/createProduct', createProduct);

module.exports = Router;
