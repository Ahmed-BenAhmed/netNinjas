const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
 
    
} , {timestamps: true});

const task = mongoose.model('task', taskSchema);

module.exports = task;
