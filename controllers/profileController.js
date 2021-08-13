const User = require('../models/user');

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
const getProfile = (req, res) => {
    const username = req.params.username;

    User.findOne({username: username})
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(404);
            res.json(err);
        })
}

const editProfile = async (req, res) => {
    const id = req.session.userId;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const user = await User.findById(id, '+email');
    if(username) user.username = username;
    if(email) user.email = email;
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