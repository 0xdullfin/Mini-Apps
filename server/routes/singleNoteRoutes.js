const express = require('express');
const router = express.Router();
const { createNote } = require('../controllers/createNote');
const { getOneNote } = require('../controllers/getOneNote');
const { deleteNote } = require('../controllers/deleteNote');
const { editNote } = require('../controllers/editNote');

router.route('/notes/:id')
    .get(getOneNote)
    .put(editNote)
    .delete(deleteNote)
    
router.route('/createnote')
    .post(createNote);

module.exports = router;
