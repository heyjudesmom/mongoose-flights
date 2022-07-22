const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create, 
}

function newTicket(req, res) {
        res.render('tickets/new',  {flightId: req.params.id}
        );
};

function create(req, res) {
    const flightId = req.params.id;
    req.body.flight = flightId;
    Ticket.create(req.body, function(err, ticket){
        console.log(req.body)
        res.redirect(`/flights/${flightId}`)
    })
}

