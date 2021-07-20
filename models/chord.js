const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chordSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    symbol:{
        type: String,
        rrequired: true,
    },
    img:{
        type: String,
        required: true,
    }
})

const Chord  = mongoose.model("Chord", chordSchema);

module.exports = Chord;