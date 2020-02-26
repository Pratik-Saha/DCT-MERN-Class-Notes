const express = require('express')
const router = express.Router()

const bookingController = require('../app/controllers/bookingContoller')

router.post('/bookings', bookingController.create)


module.exports = router