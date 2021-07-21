const FavouriteSong = require("../models/favouriteSong");
const Song = require("../models/song");
const ObjectId = require("mongoose").Types.ObjectId;

//songs
const songs = (req, res) => {
    Song.find().populate('chords').then((songs) => {
        console.log(songs);
        res.json(songs);
    });
};


//favourite songs
const favouriteSongs = (req, res) => {
    const userId = req.session.userId;
    console.log(userId);

    FavouriteSong.find({user: ObjectId(userId)}).populate({
        path: 'song',
        populate: {path: 'chords'}
    })
    .then(result => {
        console.log(result)
        res.json(result.map(favouriteSong => {
            return {
                author: favouriteSong.song.author,
                title: favouriteSong.song.title,
                chords: favouriteSong.song.chords
            }
        }));
    })
    .catch(err => {
        res.status(401)
        res.json(err);
    })

};

//export
module.exports = {
    songs,
    favouriteSongs,
}