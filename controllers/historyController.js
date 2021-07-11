const History = require('../models/history');
const ObjectId = require("mongoose").Types.ObjectId;

const getRecentlyPlayed = (req, res) => {
    const userId = req.query.id;
    console.log(userId);

    History.find({user: ObjectId(userId)}).populate("song")
     .then(result => {
         res.json(result);
     })
     .catch(err => {
         res.status(404);
         res.json(err);
     })

}

module.exports = {
    getRecentlyPlayed,
}