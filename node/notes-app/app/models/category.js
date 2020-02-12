const mongoose = require('mongoose')

const Schema = mongoose.Schema

//create a schema for category - name
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

//create a model called as category
const Category = mongoose.model('Category',categorySchema)

module.exports = Category