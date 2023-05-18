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
// POST /articles
router.post('/', ensureLoggedIn, articlesCtrl.create);

// router.get('/new', ensureLoggedIn, articlesCtrl.newArticle)

// router.get('/edit/:id', ensureLoggedIn, articlesCtrl.editArticle)

// router.get('/:slug', articlesCtrl.showArticle)

// router.post('/', ensureLoggedIn, articlesCtrl.createArticle, articlesCtrl.saveArticleAndRedirect('new'))

// router.put('/:id', ensureLoggedIn, articlesCtrl.updateArticle, articlesCtrl.saveArticleAndRedirect('edit'))

// router.delete('/:id', ensureLoggedIn, articlesCtrl.deleteArticle)

module.exports = router;