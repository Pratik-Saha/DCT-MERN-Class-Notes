const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(endDate){
                var startDate = new Date(this.startDate)
                var endDate = new Date(endDate)
                const diff = parseInt((endDate - startDate)/(1000 * 60 * 60 * 24))
                if(diff < 0){
                    return false
                }else{
                    if(diff > 10){
                        return false
                    }else{
                        return true
                    }
                }
            },
            message: function(){
                return 'End date must be more than start date'
            }
        }
    }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking