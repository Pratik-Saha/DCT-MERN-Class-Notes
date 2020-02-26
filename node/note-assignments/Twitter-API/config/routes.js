const express = require('express')
const router = express()

const tweetController = require('../app/controllers/tweetController')

router.get('/tweets', tweetController.list)
router.post('/fake_users', fakeUserController.create)


module.exports = router
