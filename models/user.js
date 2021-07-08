const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    email:{
        type:String,
        required: true,
        select: false,
    },
    bio:{
        type: String,
        required: true,
    },
    lastOnline:{
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);