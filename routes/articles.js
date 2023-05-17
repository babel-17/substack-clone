var express = require('express');
var router = express.Router();

const articlesCtrl = require('../controllers/articles')

// GET /articles
router.get('/', articlesCtrl.index);
// GET /articles/new
router.get('/new', articlesCtrl.new);
// GET /articles/:id 
router.get('/:id', articlesCtrl.show);
// POST /movies
router.post('/', articlesCtrl.create);
	
module.exports = router;