const express = require( 'express');
const router = express.Router();

// Require controller modules.
const starshipController = require('../controllers/starship')

router.get('/', starshipController.index);

module.exports = router;