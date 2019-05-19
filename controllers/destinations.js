var Flights = require('../models/flight')

module.exports = {
    create, 
};


function create(req, res) {
    Flights.findById(req.params.id, function(err, flight) {
        if (req.body.arrival === '') {
            req.body.arrival = undefined 
        }
        flight.destination.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}
