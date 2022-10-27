const express = require( 'express');
const router = express.Router();

// Require controller modules.
const planetController = require('../controllers/planet')

router.get('/', planetController.index);

module.exports = router;