const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(email){
                return validator.isEmail(email)
            },
            message: function(){
                return 'Invalid Email Format'
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ]
})

userSchema.pre('save', function(next){
    const user = this
    if(user.isNew){
        bcryptjs.genSalt(10)
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encryptedPwd) => {
                    user.password = encryptedPwd
                    next()
                })
        })
    }else{
        next()
    } 
})

userSchema.statics.findByCredentials = function(email, password){
    const User = this
     return User.findOne({ email })
        .then((user) => {
            if(!user){
                return Promise.reject('Invalid Email id')
            }else{
                return bcryptjs.compare(password, user.password)
                    .then((isMatched) => {
                        if(isMatched){
                            return Promise.resolve(user)
                        }else{
                            return Promise.reject('Invalid pssword')
                        }
                    })
            }
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

userSchema.methods.generateToken = function(){
    const user = this
    const tokenData = {
        _id: user._id, 
        username: user.username, 
        createdAt: Number(new Date()) 
    }
    let token
    try{
        token = jwt.sign(tokenData, 'jwt@123')
    }
    catch(e){
        return Promise.reject(e)
    }
    user.tokens.push({
        token
    })

    return user.save()
        .then((user) => {
            return Promise.resolve(token)
        })
        .catch((err) => {
            return Promise.reject(err)
        })

}

const User = mongoose.model('User', userSchema)

module.exports = User