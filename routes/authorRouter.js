const express = require('express');
const authorController = require('../controllers/authorController');

const router = express.Router();

router.get('/:authorId', authorController.getAuthorSongs);

module.exports = router;