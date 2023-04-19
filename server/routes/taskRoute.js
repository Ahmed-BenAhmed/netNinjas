const crudController = require('../controllers/taskController');
const { Router } = require('express');
const router = Router();
const task = require('../models/task');
const project = require('../models/project');
const taskController = require('../controllers/taskController');

taskController.createOne = async (req, res) => {
    try {
        console.log("Task to be created",req.body)
        const newTask = await task.create(req.body);
        await newTask.save();
        await project.findByIdAndUpdate(req.body.project, {
            $push: {
                tasks: newTask._id
            },
            $inc: {
                numberOfTask: 1
            }
        })
        console.log('project updated', project.tasks);
        return res.status(201).json(newTask);

    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
}

router.post('/task', taskController.createOne)
router.get('/tasks', taskController.getMany)
router.get('/task/:taskId', taskController.getOne)
router.put('/task', taskController.updateOne)

module.exports = router;
