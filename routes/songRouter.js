const express = require('express');
const songController = require('../controllers/songController');

const router = express.Router();

router.post('/',songController.song )
router.get('/:songId', songController.songById)
router.put('/:songId/liked', songController.addFavouriteSong)
router.delete('/:songId/liked', songController.deleteFavouriteSong)

module.exports = router;