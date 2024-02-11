const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

router.post('/submitContent', contentController.submitContent);

module.exports = router;
