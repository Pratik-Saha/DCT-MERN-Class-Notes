const mongoose = require('mongoose')

const Schema = mongoose.Schema

/*creating schema - blueprint that defines the fields that each of your document should have
it also helps to define validations at application level not at databse level */
const Schema = mongoose.Schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category' //Model name
    }

})

//create note model - creates a constructor function that has various static and instance methods 
const Note = mongoose.model('Note',noteSchema)

module.exports = Note