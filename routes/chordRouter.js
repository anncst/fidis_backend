const express = require('express');
const chordController = require('../controllers/chordController');

const router = express.Router();

router.get('/', chordController.getChord)

module.exports = router;