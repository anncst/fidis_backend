const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    songs: [{
        type: Schema.Types.ObjectID,
        ref: 'Song',
    }],
    spotifyId:{
        type: String,
    }
    
})

authorSchema.index({
    name: 'text',
}); 

module.exports = mongoose.model("Author", authorSchema);