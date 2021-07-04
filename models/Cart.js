const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		products: {
			type: Array,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('cart', cartSchema);
