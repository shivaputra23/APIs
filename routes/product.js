const Router = require('express').Router();

const { createProduct, category } = require('../controller/product');

Router.post('/createProduct', createProduct);
Router.get('/getCategoryProducts/:category', category);

module.exports = Router;
