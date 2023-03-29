const crudController = require('./crudController');
const User = require('../models/user');

const userController = crudController(User);

userController.createOne = () => {};

module.exports = crudController(User)