const Product = require('../models/Products');
const Cart = require('../models/Cart');
const CartItem = require('../models/CartItem');
const mongoose = require('mongoose');

module.exports.createProduct = async (req, res) => {
	try {
		const { name, description, imageUrl, cost, isAvailable, category } =
			req.body;
		const product = await Product.create({
			name,
			description,
			imageUrl,
			cost,
			isAvailable,
			category,
		});
		res.status(201).json(product);
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: 'something went wrong' });
	}
};

module.exports.category = async (req, res) => {
	const { category } = req.params;
	const products = await Product.find({ category: category });
	res.status(200).json(products);
};

module.exports.addCart = async (req, res) => {
	try {
		const { userId, productId: products } = req.body;
		const productId = mongoose.Types.ObjectId(products);
		const product = await CartItem.findOne({ productId });
		if (product) {
			product['quantity'] += 1;
			await product.save();
			res.status(200).json({ status: 'updated successfully' });
		} else {
			await CartItem.create({ productId, quantity: 1, userId });
			res.status(200).json({ status: 'created successfully' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: 'something went wrong' });
	}
};

module.exports.getCartItems = async (req, res) => {
	const elements = await CartItem.aggregate.lookup({
		from: 'products',
		localField: 'productId',
		foreignField: '_id',
		as: 'product',
	});
	res.status(200).json(elements);
};

module.exports.updateQuantity = async (req, res) => {
	const { type, _id } = req.body;
	const cartItem = await CartItem.findById(_id);
	if (type === 'increase') {
		cartItem['quantity'] += 1;
	} else {
		cartItem['quantity'] -= 1;
	}
	await cartItem.save();
	res.status(200).json({ status: 'updated successfully' });
};
