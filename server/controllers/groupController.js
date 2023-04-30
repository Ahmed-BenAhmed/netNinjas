const crudController = require('./crudController')
const group = require('../models/group')


module.exports = crudController(group,[{path: "project", strictPopulate: false},{path: "user", strictPopulate: false}])