const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Chord = require('../models/chord');
const Author = require('../models/author');
const User = require('../models/user')

const songSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectID,
        ref: 'Author',
    },
    chords:[{
        type: Schema.Types.ObjectID,
        ref: 'Chord',
    }],
    text:{
        type: String, 
        required: true,
        select: false,
    },
    user:{
        type: Schema.Types.ObjectID,
        ref: 'User',
    }
});

songSchema.index({
    'title': 'text',
    'author.name': 'text',
}); 


module.exports = mongoose.model("Song", songSchema);