const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema ({
    groupName: {
        type: String,
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    bio: String,
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "project",
    }]
} , {timestamps: true});

const group = mongoose.model('group', groupSchema);

module.exports = group;