var express = require('express');
var router = express.Router();
var ticketsController = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsController.new),
router.post('/flights/:id', ticketsController.create);

module.exports = router;