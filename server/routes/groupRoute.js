const crudController = require('../controllers/groupController');
const { Router } = require('express');
const router = Router();
const group = require('../models/group');
const groupController = require('../controllers/groupController');


router.post('/group', groupController.createOne)
router.get('/groups', groupController.getMany)
router.get('/group/:groupId', groupController.getOne)
router.put('/group', groupController.updateOne)

module.exports = router;
