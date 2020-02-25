const _ = require('lodash')

const User = require('../models/User')


module.exports.register = (req, res) => {
    const body = _.pick(req.body, ['username', 'email', 'password'])
    const user = new User(body)
    user.save()
        .then((user) => {
            res.send(_.pick(user, ['_id', 'username', 'email', 'password']))
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.login = (req, res) => {
    const body = _.pick(req.body, ['email', 'password'])
    const { email, password } = body
    User.findByCredentials(email, password)
        .then((user) => {
           return user.generateToken()
        })
        .then((token) => {
            res.header('x-auth', token).json({ notice: 'successfully logged in!!'})
        })
        .catch((err) => {
            res.json(err)
        })
}