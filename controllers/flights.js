var Flight = require('../models/flight');
var Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    delete: deleteTicket,
    // deleteDestination,
}

function index(req, res) {
    var sort = {};
    var sortBy = req.query.sortBy;
    var sortDir = req.query.sortDir;
    sort[sortBy] = 1 * sortDir;
    Flight.find({}).sort(sort).exec(function (err, flights) {
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id)
    .populate('tickets').exec(function(err, flight) {
        Ticket.find({_id: {$nin: flight.tickets}})
        .exec(function(err, tickets) {    
        res.render('flights/show', {flight, tickets});
        })
    })
}

function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.ticketId, function(err) {
        res.redirect(`/flights/${req.params.flightId}`);
    });
}

// function deleteDestination(req, res) {
//     Flight.findById(req.params.id, function(err) {
//         flight.destination.id(_id).remove();
//         flight.save(function(err) {
//             res.redirect(`/flights/${req.params.flightId}`);
//         });
//     });
// }

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    if (req.body.departs === '') {
        req.body.departs = undefined 
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect(`/flights/${flight._id}`);
    });
}