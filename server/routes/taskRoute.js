const crudController = require('../controllers/taskController');
const { Router } = require('express');
const router = Router();
const task = require('../models/task');
const taskController = require('../controllers/taskController');


router.post('/CreateTask', taskController.createOne)

module.exports = router;
