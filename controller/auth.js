const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports.signup = async (req, res) => {
	try {
		const { email, password, userName } = req.body;
		const encryptPassword = await bcrypt.hash(password, 10);
		const data = await User.create({
			userName: userName,
			email: email,
			password: encryptPassword,
		});
		res.status(201).json(data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: err });
	}
};

module.exports.signin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email: email });
		console.log(user);
		if (!user) {
			res.status(401).json({ status: 'invalid email or password' });
		}
		const dcrypt = await bcrypt.compare(password, user.password);
		if (!dcrypt) {
			res.status(401).json({ status: 'invalid username or password' });
		}
		res.status(200).json({ status: 'logged in successfully' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: err });
	}
};
