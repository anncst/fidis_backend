const Song = require("../models/song");

//song
const song = (req, res) => {
    if (!req.body){
        res.status(400);
        res.json({message:"Request body is missing"});
        return;
    }

    const title = req.body.title;
    const author = req.body.author;

    if (!title || !title.length || !author || !author.length) {
        res.status(400);
        res.json({message: "Title or author is missing"});
        return;
    }

    const song = new Song({
        title: title,
        author: author,
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

    Song.findById(songId)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(404);
            res.json(err);
        })
};

//export
module.exports = {
    song,
    songById,
}