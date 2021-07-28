const Author = require('../models/author');


const getAuthorSongs = (req, res) => {
    const name = req.params.name;
    
    Author.find({name: name}).populate("songs")
    .then(result.map(author => {
        return {
                author: author.song.author,
                title: author.song.title,
                id: author.song.id
        }
    }))
    .catch(err => {
        res.status(404);
        res.json(err);
    })  
}

module.exports = {
    getAuthorSongs,
}