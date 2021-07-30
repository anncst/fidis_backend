const express = require('express');
const authorController = require('../controllers/authorController');

const router = express.Router();

router.get('/:name', authorController.getAuthorSongs);

module.exports = router;