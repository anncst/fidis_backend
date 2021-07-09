const User = require('../models/user');

//search profile by username
const profile = (req, res) => {
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
    profile,
}