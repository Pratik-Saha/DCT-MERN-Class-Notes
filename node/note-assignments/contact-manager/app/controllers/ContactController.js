const Contact = require('../models/Contact')
const _ = require('lodash')

module.exports.list = (req, res) => {
    Contact.find({ user: req.user._id })
        .then((contacts) => {
            res.json(contacts)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = _.pick(req.body, ['contact'])
    const contact = new Contact(body)
    console.log(req.user)
    contact.user = req.user._id
    contact.save()
        .then((contact) => {
            res.json({
                contact: _.pick(contact, ['_id', 'contact', 'user']),
                notice: 'Contact created successfully'
            })
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = _.pick(req.body, ['contact'])
    Contact.findOneAndUpdate({ 
        _id: id, 
        user: req.user._id 
    }, body, { new: true, runValidators: true })
    .then((contact) => {
        res.json({
            contact: _.pick(contact, ['_id', 'contact', 'user']),
            notice: 'Contact updated successfully'
        })
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Contact.findOneAndDelete({ _id: id, user: req.user._id })
        .then((contact) => {
            res.json({
                contact: _.pick(contact, ['_id', 'contact', 'user']),
                notice: 'Contact deleted successfully'
            })
        })
}