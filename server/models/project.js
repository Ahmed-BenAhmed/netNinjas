const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
 
    
} , {timestamps: true});

const project = mongoose.model('project', projectSchema);

module.exports = project;