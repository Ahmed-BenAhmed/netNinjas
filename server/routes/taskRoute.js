const crudController = require('../controllers/taskController');
const { Router } = require('express');
const router = Router();
const task = require('../models/task');
const taskController = require('../controllers/taskController');


router.post('/task', taskController.createOne)
router.get('/tasks', taskController.getMany)
router.get('/task/:taskId', taskController.getOne)
router.put('/task', taskController.updateOne)

module.exports = router;
