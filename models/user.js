const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
        required: false,
    },
    lastOnline:{
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
});

userSchema.methods.setPassword = async function (password) {
    this.password = await bcrypt.hash(password, 10);
}

userSchema.methods.verifyPassword = async function (password) {
    console.log(password, this.password)
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model("User", userSchema);