const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../middleware/authentication')(passport)

const UsersController = require('../app/controllers/UsersController')
const ContactController = require('../app/controllers/ContactController')

router.post('/register', UsersController.register)
router.post('/login', UsersController.login)

router.get('/contacts', passport.authenticate('jwt', { session: false }), ContactController.list)
router.post('/contacts', passport.authenticate('jwt', { session: false }), ContactController.create)
router.put('/contacts/:id', passport.authenticate('jwt', { session: false }), ContactController.update)
router.delete('/contacts/:id', passport.authenticate('jwt', { session: false }), ContactController.destroy)

module.exports = router