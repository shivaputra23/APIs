const Router = require('express').Router();

const { createProduct, category, addCart } = require('../controller/product');

Router.post('/createProduct', createProduct);
Router.get('/getCategoryProducts/:category', category);
Router.post('/addCart', addCart);

module.exports = Router;
