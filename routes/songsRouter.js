const express = require('express');
const songsController = require('../controllers/songsController');

const router = express.Router();

router.get('/favourite',songsController.favouriteSongs);

router.get('/', songsController.songs);

module.exports = router;