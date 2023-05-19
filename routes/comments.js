const express = require('express');
const router = express.Router();
const articlesCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/articles/:id/comments', ensureLoggedIn, articlesCtrl.create);

module.exports = router;