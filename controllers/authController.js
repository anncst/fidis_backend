const User = require('../models/user');


const createAccount = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const user = new User({
        username: username,
        email: email,
    });

    user.setPassword(password).then(() => {
        user.save()
        .then(result => {
            res.status(201);
            res.send();
        })
        .catch(err => {
            res.status(422);
            res.json(err);
        })
    });
}

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    User.findOne({
        username: username,
    }, "+password")
    .then(user => {
        user.verifyPassword(password).then(match => {
            if (match){
                user.lastOnline = Date.now();
                user.save()
                res.send("Successfully");
            } else{
                res.send("Wrong password")
            }
        })
        
    })
}

module.exports = {
    createAccount,
    login
}