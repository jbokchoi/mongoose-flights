var Flight = require('../models/flight');
var Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
}

function index(req, res) {
    var sort = {};
    var sortBy = req.query.sortBy;
    var sortDir = req.query.sortDir;
    sort[sortBy] = 1 * sortDir;
    var flights = Flight.find({}).sort(sort).exec(function (err, flights) {
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
        // console.log(flight);
        res.redirect(`/flights/${flight._id}`);
    });
}

// function sort(req, res) {
//     Flight.find({}, function(err, flights){
//         res.render('flights/index', {flights: flights})
//     });
// }
