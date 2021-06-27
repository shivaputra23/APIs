const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');

mongoose
	.connect(
		`mongodb+srv://shivaputrapuduru:shivass23@cluster0.90z1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then((data) => {
		console.log('data base is connected');
	});

let port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(authRoutes);

app.listen(port, (req, res) => {
	console.log(`server starting at port ${port}`);
});
