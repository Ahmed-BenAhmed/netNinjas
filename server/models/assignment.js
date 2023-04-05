const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignementSchema = new Schema ({

    title: {
        type: String,
        required: true,
    },
    description: String,

    doDate: Date,

    status: {
        type: String, 
        enum: ['Completed', 'Active', 'Archived', 'On Hold', 'Not Started', 'Cancelled','Deleted'],
        default: 'Active'
    }, 
    priority: {
        type: String,
        enum: ['Low', "Medium", 'High', 'Critical'],
        default: "Medium"
    },
    
} , {timestamps: true});

const assignement = mongoose.model('assignement', assignementSchema);

module.exports = {assignement, assignementSchema};