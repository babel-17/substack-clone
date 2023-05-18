const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/articles/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;