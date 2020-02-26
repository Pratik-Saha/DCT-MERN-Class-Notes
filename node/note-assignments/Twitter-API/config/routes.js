const express = require('express')
const router = express()

const tweetController = require('../app/controllers/tweetController')
const fakeUserController = require('../app/controllers/fakeUserController')

router.get('/tweets', tweetController.list)
router.post('/fake_users', fakeUserController.create)


module.exports = router