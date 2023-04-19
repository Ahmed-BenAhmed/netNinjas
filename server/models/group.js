const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema ({
    groupName: String
} , {timestamps: true});

const group = mongoose.model('group', groupSchema);

module.exports = group;