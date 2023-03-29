const crudController = require('./crudController')
const task = require('../models/task')

console.log(crudController(task))

module.exports = crudController(task)