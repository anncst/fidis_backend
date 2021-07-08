const express = require('express');
const mongoose = require('mongoose');
const Song = require("./models/song");

mongoose.connect('mongodb://localhost:27017/fidis', {useNewUrlParser: true, useUnifiedTopology: true})

const app = express();

app.listen(3000)
app.use(express.json())

app.get('/songs/favourite', (req, res) => {
    res.json([
        {title: "KAramba", author: "Alalal"},
        {title: "KAramba", author: "Alalal"},
    ])
})

app.get("/songs", (req, res) => {
    Song.find().then((songs) => {
        console.log(songs);
        res.json(songs);
    });
})

app.post('/song/create', (req, res) => {
    if (!req.body){
        res.status(400)
        res.json({message:"Request body is missing"})
        return;
    }

    const title = req.body.title;
    const author = req.body.author;
    console.log(!title.length, !author.length)

    if (!title || !title.length || !author || !author.length) {
        res.status(400);
        res.json({message: "Title or author is missing"});
        return;
    }

    const song = new Song({
        title: title,
        author: author,
    });
    song.save()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(422);
            res.json(err);
        })
})

