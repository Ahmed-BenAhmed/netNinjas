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
        enum: ['Completed', 'Active', 'Archived', 'OnHold', 'NotStarted', 'Cancelled','Deleted'],
        default: 'Active'
    }, 
    priority: {
        type: String,
        enum: ['low', 'moderate', 'high', 'critical'],
        default: 'moderate'
    },
    
} , {timestamps: true});

const assignement = mongoose.model('assignement', assignementSchema);

module.exports = assignement;