const mongoose = require('mongoose')

const setupDB = () => {
    //DB configuraton
    mongoose.connect('mongodb://localhost:27017/booking-model-backend', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
            
        })
}

module.exports = setupDB