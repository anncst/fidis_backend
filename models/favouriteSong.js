const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSongSchema = new Schema ({
    song: {
        type: Schema.Types.ObjectID,
        ref: 'Song',
        required: true,
    },
    user : {
        type: Schema.Types.ObjectID,
        ref: 'User',
        required: true,
    }
})

module.exports = mongoose.model("FavouriteSong", favouriteSongSchema);