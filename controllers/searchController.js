const Song = require('../models/song') ;

const search = (req, res) => {
    const q = req.query.q
    Song.find({
        $text:{$search: q}
    })
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(400);
        res.json(err);
    })
}

module.exports = {
    search
}