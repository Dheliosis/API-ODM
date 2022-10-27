const express = require( 'express');
const router = express.Router();

// Require controller modules.
const transportController = require('../controllers/transport')

router.get('/', transportController.index);

module.exports = router;