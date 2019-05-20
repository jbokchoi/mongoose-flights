var express = require('express');
var router = express.Router();
var destinationsController =  require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsController.create);
router.delete('/:flightId/:destinationId', destinationsController.deleteDes);

module.exports = router;