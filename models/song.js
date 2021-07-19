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
    },
    chords:[{
        type: Schema.Types.ObjectID,
        ref: 'Chord',
    }],
    text:{
        type: String, 
        required: true,
        select: false,
    }
});

songSchema.index({
    title: 'text',
    author: 'text',
}); 


module.exports = mongoose.model("Song", songSchema);