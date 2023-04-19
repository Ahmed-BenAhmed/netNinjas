const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {assignementSchema} = require('./assignment')
const taskSchema = assignementSchema.add({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project"
    }
})
const task = mongoose.model('task', taskSchema);

module.exports = task;
