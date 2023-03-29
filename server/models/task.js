const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {assignementSchema} = require('./assignment')
const taskSchema = assignementSchema
const task = mongoose.model('task', taskSchema);

module.exports = task;
