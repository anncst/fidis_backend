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
            req.session.username = result.username;
            req.session.userId = result.id;
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
        if(!user) {
            res.send("User not found")
            return;
        }
        user.verifyPassword(password).then(match => {
            if (match){
                user.lastOnline = Date.now();
                user.save()
                req.session.username = user.username;
                req.session.userId = user.id;
                res.send("Successfully");
            } else{
                res.send("Wrong password")
            }
        })
        
    }).catch(err => {
        res.json(err);
        res.status(401)
    })
}

const logout = (req,res) => {
    req.session.destroy((err)=>{
        console.log(err);
    })
    res.status(200);
    res.send();
}

module.exports = {
    createAccount,
    login,
    logout
}