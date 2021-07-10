const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    song:{
        type: Schema.Types.ObjectID,
        ref: 'Song',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    user:{
        type: Schema.Types.ObjectID,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model("History", historySchema);