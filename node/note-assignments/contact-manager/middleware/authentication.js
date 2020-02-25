const { Strategy, ExtractJwt } = require('passport-jwt')

const User = require('../app/models/User')

const opts = {
    jwtFromRequest: ExtractJwt.fromHeader('x-auth'),
    secretOrKey: 'jwt@123'
}

const passport = (passport) => {
    passport.use(new Strategy(opts, function(payload, done){
        //console.log('token validated')
        User.findOne({ _id: payload._id })
            .then((user) => {
                if(user){
                    //console.log('user found')
                    return done(null, user)
                }else{
                    return done(false, null)
                }
            })
            .catch((err) => {
                return done(err, false)
            })
    }))
}

module.exports = passport