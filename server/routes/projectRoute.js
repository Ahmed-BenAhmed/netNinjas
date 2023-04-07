const crudController = require('../controllers/projectController');
const { Router } = require('express');
const router = Router();
const project = require('../models/project');
const projectController = require('../controllers/projectController');


router.post('/project', projectController.createOne)
router.get('/projects', projectController.getMany)
router.get('/project/:projectId', projectController.getOne)
router.put('/project', projectController.updateOne)

module.exports = router;
