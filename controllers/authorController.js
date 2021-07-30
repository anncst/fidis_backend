const Author = require('../models/author');


const getAuthorSongs = (req, res) => {
    const name = req.params.name;
    
    Author.findOne({name: name}).populate("songs").populate({
        path: 'songs',
        populate: {path: 'chords author'}
    })
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(404);
        res.json(err);
    })  
}

module.exports = {
    getAuthorSongs,
}