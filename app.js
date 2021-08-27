const express = require('express');
const mongoose = require('mongoose');
const songsRouter = require('./routes/songsRouter');
const songRouter = require('./routes/songRouter');
const profileRouter = require ('./routes/profileRouter');
const authRouter = require ('./routes/authRouter');
const historyRouter = require('./routes/historyRouter');
const searchRouter = require('./routes/searchRouter');
const session = require('express-session');
const chordRouter = require('./routes/chordRouter');
const MongoStore = require('connect-mongo');
const authorRouter = require('./routes/authorRouter');
const myProfileRouter = require('./routes/myProfileRouter');

require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/fidis', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,});

const app = express();

app.listen(3000, "0.0.0.0");
app.use(express.json());

app.use(session({
    secret:"p2s5v8y/B?E(G+KbPeShVmYq3t6w9z$C",
    saveUninitialized:false,
    resave: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/session',
      })
}))

//songs router
app.use('/songs', songsRouter);

//song router
app.use('/song', songRouter);

//profile router
app.use('/profile', profileRouter);

//register and login router
app.use('/auth', authRouter);

//history router
app.use('/history', historyRouter);

//search router
app.use('/search', searchRouter);

app.use('/chord', chordRouter)

app.use('/author', authorRouter)

app.use('/myprofile', myProfileRouter);

