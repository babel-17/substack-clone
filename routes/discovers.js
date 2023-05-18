const express = require('express');
const router = express.Router();
const discoversCtrl = require('../controllers/discovers');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/discovers/new', ensureLoggedIn, discoversCtrl.new);
router.post('/discovers', ensureLoggedIn, discoversCtrl.create);
router.post('/articles/:id/discovers', ensureLoggedIn, discoversCtrl.addToCast);

module.exports = router;