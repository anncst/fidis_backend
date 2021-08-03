const Author = require('../models/author');
const spotifyApi = require('../config/spotifyWebApi');

const getAuthorSongs = (req, res) => {
    const name = req.params.name;
    
    Author.findOne({name: name}).populate("songs").populate({
        path: 'songs',
        populate: {path: 'chords author'}
    })
    .then(result => {
        if(!result.spotifyId){
            res.json({
                name: result.name,
                songs: result.songs
            });
        }
        spotifyApi.getArtist(result.spotifyId).then(response => {
            console.log(response);

            res.json({
                name: result.name,
                image: response.body.images[2],
                songs: result.songs
            });
        })
        .catch(err => {
            console.log(err);
        })
        
    })
    .catch(err => {
        res.status(404);
        res.json(err);
    })  
}

module.exports = {
    getAuthorSongs,
}