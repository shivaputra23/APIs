const monogoose = require('mongoose');

const Product = new monogoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	isAvailable: {
		type: String,
		required: true,
	},
	cost: {
		type: String,
		required: true,
	},
});

module.exports = monogoose.model('products', Product);
