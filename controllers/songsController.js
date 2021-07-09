const Song = require("../models/song");

//songs
const songs = (req, res) => {
    Song.find().then((songs) => {
        console.log(songs);
        res.json(songs);
    });
};


//favourite songs
const favouriteSongs = (req, res) => {
    res.json([
        {title: "KAramba", author: "Alalal"},
        {title: "KAramba", author: "Alalal"},
    ]);
};

//export
module.exports = {
    songs,
    favouriteSongs,
}