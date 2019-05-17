var Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    sort,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {flight});
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
        console.log(flight);
        res.redirect('/flights');
    });
}

function sort(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights: flights})
    });
}