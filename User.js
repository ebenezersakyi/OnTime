const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        reqired: true
    },
    email:{
        type: String,
        reqired: true
    },
    password:{
        type: String,
        reqired: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;