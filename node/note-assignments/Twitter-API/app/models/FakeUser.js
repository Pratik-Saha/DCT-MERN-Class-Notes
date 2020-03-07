const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fakeUserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    address:{
        type: String
    },
    company: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
})

const FakeUser = mongoose.model('FakeUser', fakeUserSchema)

module.exports = FakeUser
