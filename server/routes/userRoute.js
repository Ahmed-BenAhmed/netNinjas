const crudController = require('../controllers/userController');
const { Router } = require('express');
const router = Router();
const user = require('../models/user');
const userController = require('../controllers/userController');


router.get('/users', userController.getMany)
router.get('/user/:userId', userController.getOne)
router.put('/user', userController.updateOne)

module.exports = router;
