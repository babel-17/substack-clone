const express = require('express');
const router = express.Router();
const discoversCtrl = require('../controllers/discovers');

// This router is mounted to a "starts with" path of '/'

router.get('/discovers/new', discoversCtrl.new);
router.post('/discovers', discoversCtrl.create);
router.post('/articles/:id/discovers', discoversCtrl.addToCast);

module.exports = router;