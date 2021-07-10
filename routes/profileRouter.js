const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.get('/', profileController.myProfile)
router.get('/:username', profileController.getProfile);
router.get('/history', profileController.getRecentlyPlayed);

module.exports = router;
