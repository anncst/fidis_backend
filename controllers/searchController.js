const Song = require('../models/song') ;

const search = (req, res) => {
    const q = req.query.q
    Song.find({
        $text:{$search: q}
    }).populate('chords author')
    .then(result => {
        res.json(result.map(song => {
            return{
                author: song.author,
                title: song.title,
                chords: song.chords,
                id: song.id
            }
        }))
    })
    .catch(err => {
        res.status(400);
        res.json(err);
    })
}

module.exports = {
    search
}