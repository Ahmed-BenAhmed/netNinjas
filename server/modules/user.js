const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    userName:{
        type: String,
        // userName required later
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 8
    },

    bio: String,

    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project'}],
  
    pfp: Image,

    groups: [{type: mongoose.Schema.Types.ObjectId, ref: 'groupe'}],  
    
} , {timestamps: true});

const User = mongoose.model('user', userSchema);

module.exports = User;
