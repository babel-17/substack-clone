const express = require('express');
const router = express.Router();
const articlesCtrl = require('../controllers/articles')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /articles
router.get('/', articlesCtrl.index);
// GET /articles/new
router.get('/new', ensureLoggedIn, articlesCtrl.new);
// GET /articles/:id 
router.get('/:id', articlesCtrl.show);
// POST /movies
router.post('/', ensureLoggedIn, articlesCtrl.create);
	
module.exports = router;