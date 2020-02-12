const mongoose = require('mongoose')

const setupDB = () => {
    //DB configuration
    mongoose.connect('mongodb://localhost:27017/oct-weekend-notes-app', {
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