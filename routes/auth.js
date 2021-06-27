const Router = require('express').Router();
const authController = require('../controller/auth');

Router.post('/signup', authController.signup);
Router.post('/signin', authController.signin);

module.exports = Router;
