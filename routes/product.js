const Router = require('express').Router();

const {
	createProduct,
	category,
	addCart,
	updateQuantity,
	getCartItems,
	deleteProduct,
} = require('../controller/product');

Router.post('/createProduct', createProduct);
Router.get('/getCategoryProducts/:category', category);
Router.post('/addCart', addCart);
Router.post('/updateCart', updateQuantity);
Router.get('/getCartProducts', getCartItems);
Router.get('/deleteCartItem/:id', deleteProduct);

module.exports = Router;
