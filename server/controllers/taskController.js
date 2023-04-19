const crudController = require('./crudController')
const task = require('../models/task')

module.exports = crudController(task, "project")