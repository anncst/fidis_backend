const History = require('../models/history');
const ObjectId = require("mongoose").Types.ObjectId;

const getRecentlyPlayed = (req, res) => {
    const userId = req.session.userId;
    console.log(userId);

    History.find({user: ObjectId(userId)}).populate("song").sort("-date").limit(5)
     .then(result => {
         res.json(result.map(history => {
            return {
                author: history.song.author,
                title: history.song.title,
                id: history.song.id
            }
         }));
     })
     .catch(err => {
         res.status(404);
         res.json(err);
     })  

}

module.exports = {
    getRecentlyPlayed,
}