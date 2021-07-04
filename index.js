const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');
const cors = require('cors');

mongoose
	.connect(
		`mongodb+srv://shivaputrapuduru:shivass23@cluster0.90z1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then((data) => {
		console.log('data base is connected');
	})
	.catch((err) => {
		console.log(err);
	});

let port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use(authRoutes);
app.use(productRoutes);

app.listen(port, (req, res) => {
	console.log(`server starting at port ${port}`);
});
