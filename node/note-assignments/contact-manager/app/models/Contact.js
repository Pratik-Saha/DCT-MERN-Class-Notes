const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    contact: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(contact){
                return validator.isMobilePhone(contact, 'any')
            },
            message: function(){
                console.log('message called')
                return 'Not a valid contact Number'
            }
        }
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact