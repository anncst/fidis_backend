const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.get('/', profileController.myProfile)
router.get('/:username', profileController.getProfile);

module.exports = router;
