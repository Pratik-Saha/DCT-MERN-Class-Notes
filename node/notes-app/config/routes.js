const express = require('express')
const router = express.Router()

const categoriesController = require('../app/controllers/categoriesController')

const notesController = require('../app/controllers/notesController')

router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)
router.get('/categories/:id', categoriesController.show)
router.put('/categories/:id', categoriesController.edit)
router.delete('/categories/:id', categoriesController.destroy)

router.get('/notes', notesController.list)
router.post('/notes', notesController.create)
router.get('/notes/:id', notesController.show)
router.put('/notes/:id', notesController.edit)
router.delete('/notes/:id', notesController.destroy)


module.exports = router