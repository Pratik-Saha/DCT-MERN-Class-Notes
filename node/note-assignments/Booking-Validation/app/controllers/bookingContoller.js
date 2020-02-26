const Booking = require('../models/Booking')

module.exports.create = (req, res) => {
    const body = req.body
    const booking = new Booking(body)
    booking.save()
        .then((booking) => {
            res.send(booking)
        })
        .catch((err) => {
            res.send(err)
        })
}