const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {assignementSchema} = require('./assignment')

const projectSchema = new Schema ({

    assignement: assignementSchema,

    completedTasks: {
        type: Number,
        dafault: 0
    },

    numberOfTask: {
        type: Number,
        default: 0
    },

    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'task'}]
})

const project = mongoose.model('project', projectSchema);

module.exports = project;