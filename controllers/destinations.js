var Flight = require('../models/flight')

module.exports = {
    create,
    deleteDes,
};

function deleteDes(req, res) {
    Flight.findById(req.params.flightId, function (err, flight) {
        flight.destination.id(req.params.destinationId).remove();
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}


function create(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.destination.push(req.body);
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}
