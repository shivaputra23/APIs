const Product = require('../models/Products');

module.exports.createProduct = async (req, res) => {
	try {
		const { name, description, imageUrl, cost, isAvailable } = req.body;
		const product = await Product.create({
			name,
			description,
			imageUrl,
			cost,
			isAvailable,
		});
		res.status(201).json(product);
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: 'something went wrong' });
	}
};
