const Chord = require('../models/chord');

const getChord = (req, res) => {
    Chord.find()
    .then(result => {
        res.json(result)
    }).catch(err =>{
        res.status(404);
        res.json(err);
    })
}

module.exports =  {
    getChord
}