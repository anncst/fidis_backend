const express = require('express');
const songController = require('../controllers/songController');

const router = express.Router();

router.post('/',songController.song )
router.get('/:songId', songController.songById)

module.exports = router;