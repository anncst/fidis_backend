const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
});

songSchema.index({
    title: 'text',
    author: 'text',
}); 


module.exports = mongoose.model("Song", songSchema);