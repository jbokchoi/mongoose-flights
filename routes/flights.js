var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flights');

router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.get('/:id', flightsController.show);
router.post('/', flightsController.create);
router.delete('/:id', flightsController.deleteFlight);
router.delete('/:flightId/:ticketId', flightsController.delete);

module.exports = router;
