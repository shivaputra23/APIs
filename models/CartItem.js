const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema(
	{
		productItem: {
			type: String,
			required: true,
		},
		userId: {
			type: String,
		},
		quantity: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('cartItem', cartSchema);
