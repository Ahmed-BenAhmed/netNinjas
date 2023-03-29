const crudController = require('./crudController')
const project = require('../models/project')


module.exports = crudController(project)