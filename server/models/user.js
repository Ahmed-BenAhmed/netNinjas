const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require ('validator');
const bcrypt = require('bcryptjs');

const userSchema = new Schema ({
   // userName:{
   //      type: String,
   //      userName required later
   //  },
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8 , 'Minimum password length is 8 characters']
    },

   // bio: String,

    //projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project'}],
  

   // groups: [{type: mongoose.Schema.Types.ObjectId, ref: 'groupe'}],  
    
} , {timestamps: true});

//fire a function before saving doc to db
userSchema.pre('save',async function(next) {
    console.log('user about to be created');
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//fire a function after dic saved to db
userSchema.post('save',function (doc, next) {
    console.log('user created', doc) 
    next();
})

//static method to login user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email})
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

const User = mongoose.model('user', userSchema);

module.exports = User;