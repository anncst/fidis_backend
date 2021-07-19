const Song = require("../models/song");
const Chord = require("../models/chord")

//song
const song = (req, res) => {
    if (!req.body){
        res.status(400);
        res.json({message:"Request body is missing"});
        return;
    }

    const title = req.body.title;
    const author = req.body.author;
    const text = req.body.text;
    const chords = req.body.chords;

    if (!title || !title.length || !author || !author.length) {
        res.status(400);
        res.json({message: "Title or author is missing"});
        return;
    }

    const song = new Song({
        title: title,
        author: author,
        text: text,
        chods: chords
    });
    song.save()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(422);
            res.json(err);
        });
};

//song search by id
const songById = (req, res) => {
    const songId = req.params.songId;

    Song.findById(songId, "+text").populate("chords")
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(404);
            res.json(err);
            console.log(err)
        })
};

//export
module.exports = {
    song,
    songById,
}