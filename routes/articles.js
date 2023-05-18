const express = require('express');
const router = express.Router();
const articlesCtrl = require('../controllers/articles')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', articlesCtrl.index)

router.get('/new', ensureLoggedIn, articlesCtrl.new)

router.get('/edit/:id', ensureLoggedIn, articlesCtrl.edit)

router.get('/:slug', articlesCtrl.show)

router.post('/', ensureLoggedIn, articlesCtrl.create)

router.put('/:id', ensureLoggedIn, articlesCtrl.update)

router.delete('/:id', ensureLoggedIn, articlesCtrl.delete)

module.exports = router;