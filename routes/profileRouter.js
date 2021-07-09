const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.get('/:username', profileController.profile);

module.exports = router;
