var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flights');

router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.get('/:id', flightsController.show);
// router.get('/', flightsController.sort);
router.post('/', flightsController.create);

module.exports = router;
