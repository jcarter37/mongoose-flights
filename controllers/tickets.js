const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    const flightId = req.params.id
    res.render('tickets/new', { title: "New Ticket" , flightId })
}


function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        if (err) console.log(err)
        res.redirect(`/flights/${req.params.id}`)
    })
}


