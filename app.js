const express = require('express');
const mongoose = require('mongoose');
const songsRouter = require('./routes/songsRouter');
const songRouter = require('./routes/songRouter');
const profileRouter = require ('./routes/profileRouter');
const authRouter = require ('./routes/authRouter');
const historyRouter = require('./routes/historyRouter');
const searchRouter = require('./routes/searchRouter');

mongoose.connect('mongodb://localhost:27017/fidis', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.listen(3000);
app.use(express.json());

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

