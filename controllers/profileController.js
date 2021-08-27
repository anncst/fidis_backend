const User = require('../models/user');
const FavouriteSong  = require('../models/favouriteSong');
const ObjectId = require("mongoose").Types.ObjectId;

const myProfile = (req, res) => {
    const id = req.session.userId;

    if (!id) {
        res.status(401)
        res.send()
        return
    }

    User.findById(id, '+email')
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(404);
            res.json(err)
        })
}

//search profile by username
const getProfile = async (req, res) => {
    const username = req.params.username;

    user = await User.findOne({username: username})
    favouriteSongs = await FavouriteSong.find({user: ObjectId(user.id)}).populate({
        path: 'song',
        populate: {path: 'chords author'}
    })
    res.json({
        ...user._doc,
        favouriteSongs: favouriteSongs.map(favouriteSong => favouriteSong.song),
    })
}

const editProfile = async (req, res) => {
    const id = req.session.userId;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const bio = req.body.bio;

    const user = await User.findById(id, '+email');
    if(username) user.username = username;
    if(email) user.email = email;
    if(bio) user.bio = bio;
    if(password) await user.setPassword(password);

    const savedUser = await user.save();
    res.json(savedUser)
}


//export
module.exports = {
    getProfile,
    myProfile,
    editProfile,
}