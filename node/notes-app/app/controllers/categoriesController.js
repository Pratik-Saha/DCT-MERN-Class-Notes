const Category = require('../models/category')

// add api's to perform crud operations on a category
module.exports.list = (req, res) => {
    Category.find()
        .then((Categories) => {
            res.json(Categories)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const category = new Category(req.body)
    category.save()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Promise.all([Category.findById(id), Note.find({ category: id })])
        .then((values) => {
            const [category, notes] = values
            
            res.json({
                category,
                notes
            })

            // const newCategory = category.toObject()
            // newCategory.notes = notes
            // res.json(newCategory)
        })
}

module.exports.edit = (req, res) => {
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id,body,{ new: true, runValidators: true})
        .then((category) => {
            if(category){
                res.json(category)
            }else{
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Category.findByIdAndDelete(id)
    .then((category) => {
        if(category){
            res.json(category)
        }else{
            res.json({})
        }  
    })
    .catch((err) => {
        res.json(err)
    })
}