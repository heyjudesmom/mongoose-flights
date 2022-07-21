const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create, 
    addToFlight
}

function newTicket(req, res) {
        res.render('tickets/new',  {flightId: req.params.id}
        );
};

function create(req, res) {
    const flightId = req.params.id;
    Ticket.create(req.body, function(err, ticket){
        res.redirect(`/flights/${flightId}`)
    })
}

function addToFlight() {
    Flight.findById(req.params.id, function(err, flight){
        flight.ticket.push(req.body.ticketId);
        flight.save(function(err) {
            console.log(flight.ticket)
            res.redirect(`/flights/${flight._id}`)
        })
    })
}