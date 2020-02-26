const config = require('../../config/config.default')
const Twitter = require('twitter')
const client  = new Twitter(config)

const _ = require('lodash')

const User = require('../models/User')

module.exports.list = (req, res) => {
    const username = req.query.username
    User.findOne({ username })
        .then((user) => {
            if(user){
                res.json(_.pick(user, ['_id', 'username', 'tweets']))
            }else{
                let params = {
                    screen_name: username,
                    count: 5,
                }
                
                return client.get('/statuses/user_timeline.json', params)
                    
            }
        })
        .then((tweets) => {
            if(tweets){
                const userTweets = tweets.map((tweet) => {
                    return { tweet: tweet.text }
                })
                const body = { 
                    username,
                    tweets: userTweets
                }
                const user = new User(body)
                user.save()
                    .then((user) => {
                        res.json(_.pick(user, ['_id', 'username', 'tweets']))
                    })
                    .catch((err) => {
                        res.json(err)
                    })
                
            }else{
                res.json({
                    notice: `No tweets made by the user ${username}`
                })
            }
            
        })
        .catch((err) => {
            res.json(err)
        })
}