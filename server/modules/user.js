const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    userName:{
        type: String,
        required: true
    },
    bio: String,

    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project'}],

    Duration: String,
    
    xp: Number,

    lvl: Number,

    pfp: Image,

    groups: [{type: mongoose.Schema.Types.ObjectId, ref: 'groupe'}],

    account:{type: mongoose.Schema.Types.ObjectId, ref: 'account'}
    
} , {timestamps: true});

const project = mongoose.model('project', projectSchema);