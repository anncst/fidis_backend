const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.get('/', profileController.myProfile);
router.post('/edit', profileController.editProfile);

module.exports = router;