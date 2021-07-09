const User = require('../models/user');

const myProfile = (req, res) => {
    const id = "60e6bec751b64698304a4a6f"

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

//export
module.exports = {
    getProfile,
    myProfile
}