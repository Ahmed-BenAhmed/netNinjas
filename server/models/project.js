const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {assignementSchema} = require('./assignment')

const projectSchema = new Schema ({

    assignement: assignementSchema,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    completedTasks: {
        type: Number,
        dafault: 0
    },

    numberOfTask: {
        type: Number,
        default: 0
    },

    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "group"
    },

    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'task'}]
})

const project = mongoose.model('project', projectSchema);

module.exports = project;