const express = require('express');
const router = express.Router();
const { getNotes } = require('../controllers/getNotes');

router.get('/', getNotes);

module.exports = router;
