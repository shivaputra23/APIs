const Product = require('../models/Products');

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
